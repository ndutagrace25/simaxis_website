import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Prepare the SMS message
    const smsMessage = `New Message From The Website:
Name: ${name}
Email: ${email}
Message: ${message}`;

    let mobileNumbers = [
      "+254708807403",
      "+254722164408",
      "+254721863405",
      "+254732863405",
      "+254703959872",
    ];
    let successCount = 0;
    let errorMessages = [];

    // Send SMS to all mobile numbers
    for (const mobile of mobileNumbers) {
      try {
        const response = await fetch(
          "https://quicksms.advantasms.com/api/services/sendotp/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              apikey: "afbf7fc404a7abb1d84c37be84fe368d",
              partnerID: "10710",
              mobile: mobile,
              message: smsMessage,
              shortcode: "SI-MAXIS",
              hashed: false,
            }),
          }
        );

        if (response.ok) {
          successCount++;
        } else {
          const errorData = await response.json();
          errorMessages.push(
            `Failed to send to ${mobile}: ${
              errorData.message || `HTTP ${response.status}`
            }`
          );
        }
      } catch (error: any) {
        errorMessages.push(`Failed to send to ${mobile}: ${error.message}`);
      }
    }

    // Return response based on results
    if (successCount === mobileNumbers.length) {
      return NextResponse.json({
        success: true,
        message: `SMS sent successfully to all ${mobileNumbers.length} recipients`,
      });
    } else if (successCount > 0) {
      return NextResponse.json({
        success: true,
        message: `SMS sent to ${successCount}/${
          mobileNumbers.length
        } recipients. Errors: ${errorMessages.join(", ")}`,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send SMS to any recipients. Errors: ${errorMessages.join(
            ", "
          )}`,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error in SMS API route:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

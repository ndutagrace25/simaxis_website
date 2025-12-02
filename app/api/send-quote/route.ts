import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, product, quantity, location, message } = body;

    // Prepare the SMS message for quote request
    const smsMessage = `New Quote Request From The Website:
Name: ${name}
Phone: ${phone}
Email: ${email}
Product: ${product || "Not specified"}
Quantity: ${quantity || "Not specified"}
Location: ${location || "Not specified"}
Message: ${message || "No additional message"}`;

    let mobileNumbers = [
      "+254708807403",
      "+254722164408",
      "+254721863405",
      "+257759779977",
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
        message: `Quote request sent successfully to all ${mobileNumbers.length} recipients`,
      });
    } else if (successCount > 0) {
      return NextResponse.json({
        success: true,
        message: `Quote request sent to ${successCount}/${
          mobileNumbers.length
        } recipients. Errors: ${errorMessages.join(", ")}`,
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `Failed to send quote request to any recipients. Errors: ${errorMessages.join(
            ", "
          )}`,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error in Quote Request API route:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

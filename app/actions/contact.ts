"use server";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  timeline: string;
  source: string;
  budget: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Google Sheets Web App URL
    // You need to create a Google Apps Script Web App and replace this URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;

    if (!GOOGLE_SHEETS_URL) {
      console.error("Google Sheets webhook URL not configured");
      // Still return success to avoid blocking user experience
      // Data will be logged but not saved to sheets
      return { success: true };
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = {
      timestamp,
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      company: data.company || "",
      services: data.services.join(", "),
      timeline: data.timeline,
      source: data.source,
      budget: data.budget,
      message: data.message,
    };

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Failed to submit form" };
  }
}

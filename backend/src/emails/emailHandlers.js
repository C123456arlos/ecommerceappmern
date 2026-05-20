// import { resendClient } from "../lib/resend.js"
// import { createWelcomeEmailTemplate } from "./emailTemplates.js"

// export const sendWelcomeEmail = async (email, name, clientURL) => {
//     const { data, error } = await resendClient.emails.send({
//         from: `${sender.name} <${sender.email}>`,
//         to: email,
//         subject: 'welcome to app',
//         html: createWelcomeEmailTemplate(name, clientURL)
//     })
//     if (error) {
//         console.log('error sending welcom email', error)
//         throw new Error('failed to send welcome')
//     }
//     console.log('welcom email sent', data)
// }



import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const { data, error } = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatify!",
        html: createWelcomeEmailTemplate(name, clientURL),
    });

    if (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome Email sent successfully", data);
};
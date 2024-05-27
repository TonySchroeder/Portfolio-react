const nodemailer = require("nodemailer");

const mail = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const mailTo = process.env.MAIL_TO;
const replyEmail = "mail@twylo.net";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const name = req.body.name;
        const emailAddress = req.body.emailAddress;
        const subject = req.body.subject;
        const message = req.body.message;

        const formatDate = () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");

            return `${day}.${month}.${year} um ${hours}:${minutes} Uhr`;
        };

        const text = `Nachricht vom ${formatDate()} von ${name}:<br><br>
      ${subject}<br><br>
      ${message}`;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: mail,
                pass,
            },
        });

        try {
            const mailOptions = {
                from: `No Reply <${replyEmail}>`,
                to: "tony.schroeder@twylo.net",
                subject,
                text,
            };

            await transporter.sendMail(mailOptions);
        } catch (error) {
            return res.status(400).json(error.message);
        }

        return res.status(200).json({ success: true });
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

export default handler;

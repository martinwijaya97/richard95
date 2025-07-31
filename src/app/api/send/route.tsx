import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY!);
// const fromEmail = process.env.FROM_EMAIL || '';

interface PostResponse {
  data?: any;
  error?: any;
}

export async function POST(req: Request, res: Response): Promise<Response> {
  try {
    // const body = await req.json();
    // const { email, subject, message } = body;
    // const { data, error }: PostResponse = await resend.emails.send({
    //   from: fromEmail,
    //   to: ['martinwijaya97@gmail.com', email],
    //   subject: subject,
    //   react: (
    //     <>
    //       <h1>{subject}</h1>
    //       <p>Thank you for contacting us!</p>
    //       <p>New message submitted:</p>
    //       <p>{message}</p>
    //     </>
    //   ),
    // });
    // if (error) {
    //   return new Response(JSON.stringify({ error, fromEmail }), {
    //     status: 500,
    //   });
    // }
    // return new Response(JSON.stringify({ data, fromEmail }), { status: 200 });
  } catch (error) {
    // return new Response(
    //   JSON.stringify({ error: (error as Error).message, fromEmail }),
    //   {
    //     status: 500,
    //   }
    // );
  }
}

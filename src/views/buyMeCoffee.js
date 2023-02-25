import React from 'react'
const BuyMeCoffee = () => {
    return(
        <>
            <header>
                <h1>Support Me</h1>
                <p>Thank you for considering supporting my work!</p>
            </header>
            <main>
                <section>
                    <h2>Why Support Me?</h2>
                    <p style={{textJustify:'auto',textAlign:'justify',textIndent:'2rem'}}>Hello! My name is S.Prabhu, and I'm a full-stack developer with a passion for creating high-quality software that solves real-world problems. I have several years of experience building web applications, APIs, and mobile apps for a variety of clients and industries.
                    </p>
                    <p style={{textJustify:'auto',textAlign:'justify',textIndent:'2rem',fontFamily:'sans-serif'}}>
Over the years, I've created many open-source projects and contributed to others on platforms like GitHub. Some of my projects have gained popularity and have been used by thousands of developers around the world. I'm proud of the impact I've had on the software community and am committed to continuing to provide value to others.
                    </p>
                    <p style={{textJustify:'auto',textAlign:'justify',textIndent:'2rem'}}>
However, maintaining and improving these projects takes time, effort, and resources. As an independent developer, I rely on support from my community to continue doing what I love and creating valuable software. That's why I'm asking for your support!
                    </p>
                    <p style={{textJustify:'auto',textAlign:'justify',textIndent:'2rem'}}>

By buying me a coffee, you can help me cover the costs of hosting, maintaining, and improving my projects. Your contributions will also motivate me to keep creating new projects and contributing to the open-source community.
                    </p>
                    <p style={{textJustify:'auto',textAlign:'justify',textIndent:'2rem'}}>

Thank you for considering supporting me and for being a part of my journey as a developer. Your support means the world to me, and I can't wait to see what we can achieve together!

Feel free to customize this content to better reflect your own personality and experience as a developer. You can also include specific examples of how your contributions have benefited others and how your supporters will benefit from your future work. Good luck!</p>
                </section>
                <section>
                    <h2>How to Support Me</h2>
                    <p >
                        You can support me by buying me a coffee. Simply click the button below to contribute.</p>
                    <form action="YOUR_PAYMENT_PROCESSOR" method="POST">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID"/>
                        <input type="image" src="YOUR_BUTTON_IMAGE_URL" border="0"  alt="i will add the payment like here.. soon!"/>
                        <img alt="" border="0" src="YOUR_PIXEL_URL" width="1" height="1"/>
                    </form>
                </section>
                <section>
                    <h2>Thank You!</h2>
                    <p>Thank you for your support! Your contributions are greatly appreciated and will help me continue creating quality content.</p>
                </section>
            </main>
            <footer>
                <p>Copyright © S.Prabhu M.Tech (s.prabhu.mtech88@gmail.com) | All rights reserved</p>
            </footer>
        </>
    )
}
export default BuyMeCoffee
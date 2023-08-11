import React from "react";
import "./Landing.css";

export default function Home() {
  return (
    <main>
      <h3>Chat</h3>
      <div className="left-content">
        <p>
          Quacker is a streamlined instant messaging application tailored for
          developers seeking real-time communication and code collaboration.
        </p>
        <img
          src="https://www.callcentrehelper.com/images/stories/2021/08/instant-messaging-strategy-121593822-760.jpg"
          alt="instant messaging"
        />
      </div>
      <h3>Share</h3>
      <div className="right-content">
        <img
          src="https://media.licdn.com/dms/image/C4D08AQEthYNXSVIqIw/croft-frontend-shrinkToFit1024/0/1597380762478?e=2147483647&v=beta&t=Sz0v4y9IMm5gDjOoEz1AEJerlByJRr0HVuYz75oJgW4"
          alt="code editor"
        />

        <p>
          This user-friendly app allows developers to connect and chat instantly
          while seamlessly sharing code snippets. With intuitive interface and
          functionality, Quacker empowers developers to collaborate, debug, and
          brainstorm in real time, eliminating the need for cumbersome
          back-and-forth exchanges.
        </p>
      </div>
      <div className="leftText">
        <p>
          Say goodbye to traditional code sharing hurdles. Quacker
          revolutionizes the way developers interact and work together,
          enhancing productivity and fostering a vibrant coding community."
        </p>
      </div>
      <div>
        <h2> Why Choose Quacker?</h2>
        <p>
          Quacker transforms the way developers collaborate by combining instant
          messaging with dynamic code editing. Whether you're a remote team, a
          pair programming duo, or a freelancer working with clients, Quacker
          streamlines your workflow, reduces communication barriers, and
          accelerates project development.
        </p>
        <p>
          Join the growing community of developers who have embraced Quacker as
          their go-to platform for seamless code collaboration. Elevate your
          coding experience and make your mark in the world of collaborative
          software development.
        </p>

        <h2>Get Started</h2>
        <p>
          Ready to revolutionize your code collaboration experience? Sign up for
          Quacker today and start chatting, coding, and creating like never
          before. Your journey towards more efficient and enjoyable code
          collaboration starts right here.
        </p>
      </div>
    </main>
  );
}

import LogoVideo from "../../assets/logo-video.mp4";
import Order from "../../assets/order.png";
import Refill from "../../assets/refill.png";
import Reminder from "../../assets/reminder.png";
import "./land.css";

const LandHtml = () => {
    return (
        <div style={{ overflowY: "scroll", height: "100vh" }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <video
                    src={LogoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "400px", height: "400px" }}
                    aria-label="App Logo Animation"
                />
                <h2><b>Welcome!</b></h2>
                <p>Synchronize your health.</p>
                <button style={{ backgroundColor: "#5e17eb", color: "white", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                    Login
                </button>
            </div>

            <div className="scroll-icon" style={{marginTop: "20px"}}onClick={() => 
                document.getElementById("info")?.scrollIntoView({behavior: "smooth"})
            }
            >
              &#x25BC;
            </div>

            <div className="info-section" style={{marginTop: "50px"}}>
                <div className="info" style={{ padding: "20px", margin: "40px 0" }}>
                    <h2><b>Order Prescription Refills</b></h2>
                    <img src={Order} style={{ width: "170px", height: "170px" }} />
                    <p>
                        Effortlessly manage your prescriptions by sending refill requests directly to your pharmacy in just a few taps. Avoid the hassle of missed dosages with automatic refill tracking and alerts, ensuring that your medication is always ready when you need it. With MediSync, you stay in control of your health while saving time and effort.
                    </p>
                </div>

                <div style={{ padding: "20px", margin: "40px 0" }}>
                    <h2><b>Get Timely Reminders</b></h2>
                    <img src={Reminder} style={{ width: "170px", height: "170px" }} />
                    <p>
                        Take control of your health with personalized medicine reminders tailored to your schedule. Never miss a dose with timely alerts that keep you on track, whether it’s daily medication, weekly supplements, or occasional prescriptions. MediSync ensures you stay consistent and organized, empowering you to maintain your well-being effortlessly.
                    </p>
                </div>

                <div style={{ padding: "20px", margin: "40px 0" }}>
                    <h2><b>Refill Alerts</b></h2>
                    <img src={Refill} style={{ width: "170px", height: "170px" }} />
                    <p>
                        Stay prepared with timely refill alerts that notify you when your medication supply is running low. MediSync helps you plan ahead by ensuring you never run out of essential prescriptions, giving you peace of mind to make arrangements for refills seamlessly. Take the guesswork out of managing your health and stay in control at all times.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandHtml;

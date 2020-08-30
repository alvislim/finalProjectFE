import React                              from 'react';
import Footer                             from '../../general/Footer';
import NavigationBar                      from '../../general/Navbar';
import { Container, Button, Card }  from 'react-bootstrap';

function LandingPage() {
    return (
        <React.Fragment>
            <NavigationBar />
                <div style={{height:'100vh'}}>
                <div> 
                <Card style={{border:'none'}} className="text-white">
                    <Card.Img style={{height:'600px'}} src='https://community-assets.home-assistant.io/original/3X/d/e/dea8c60d19e758c8744437e7b91b73c10ad0e030.jpeg' />
                    <Card.ImgOverlay>
                        <h1>Hey there Kia Su</h1>
                        <p className="font-italic">
                            Tired of tracking individual local supermarket products's for discount?
                            Fret no more, this website is solely curated for this need of yours!
                        </p>
                        <p className="font-italic">
                            An email will be sent to you once your designated supermarket products's has reached your desired price!
                        </p>
                        <p className="font-italic">
                            We offer price comparison against various supermarket and a chart to analyze the daily price of the products
                        </p>
                        <p>
                        <Button href='/register' variant="dark" className='mr-2 mt-3'>
                                Sign up Now
                        </Button>
                        <Button variant="dark" className='mt-3' href='/login'>
                                Already have an account? Login here
                        </Button>
                        </p>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className='text-center mt-5 mb-5' id='howitwork'>
                        <h1>How it Works</h1>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            As of today, we have curated this website for purposes of scouring prices at Cold Storage.  
                        </p> 
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            For the name of the product, please enter something generic. For example, if you are looking for Calbee potato chips, 
                            you may set the name of the product as potato chip so that our servers can fetch a greater list of relevant items and their prices from 
                            Sheng Shiong for your comparison.
                        </p>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            For the URL, it only works if the entered URL navigates to the single product view page. (For example:
                            https://coldstorage.com.sg/carrot-prepack-australia-5012738)
                            </p>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            As some websites' product view page is an overlay or popup, in that case it will not work as our system would be unable to navigate to that specific popup page directly.
                        </p>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem', fontSize:'19px'}} className="font-weight-normal">
                            Lastly, enter your desired price for the product. Once the designated product price is cheaper or equal to your target price, you will get an email notification and you can then proceed to purchase the item at the discounted rate!
                        </p>
                 </div>
                 <Footer />
                </div>
                
                 
                        
                
        </React.Fragment>
    )
}

export default LandingPage;
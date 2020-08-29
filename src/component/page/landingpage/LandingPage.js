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
                        <p>
                            Tired of tracking individual local supermarket products's for discount?
                            Fret no more, this website is solely curated for this need of yours!
                        </p>
                        <p>
                            An email will be sent to you once your designated supermarket products's has reached your desired price!
                        </p>
                        <p>
                            We offer price comparison against various supermarket and a chart to analyze the daily price of the products
                        </p>
                        <p>
                        <Button variant="dark" className='mr-2 mt-3'>
                            <a href='/register' style={{color:'white', textDecoration: 'none'}}>
                                Sign up Now
                            </a>
                        </Button>
                        <Button variant="dark" className='mt-3'>
                            <a href='/login' style={{color:'white', textDecoration: 'none'}}>
                                Already have an account? Login here
                            </a>
                        </Button>
                        </p>
                    </Card.ImgOverlay>
                </Card>
                </div>
                <div className='text-center mt-5 mb-5' id='howitwork'>
                        <h1>How it Works</h1>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem'}}>
                            As of today, we only curated web scrapping purposes for cold storage
                            For the name of the product, please enter something generic, for example if the product is a calbee potato chip, 
                            please set the name of the product as potato chip so our server can actually fetched the list of potato chips price from 
                            Sheng Shiong for you to compare.
                        </p>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem'}}>
                            For the URL it only works if the entered URL navigates to the single product view page. (e.g.
                            https://coldstorage.com.sg/carrot-prepack-australia-5012738) As some websites the single product view page is an overlay or popup, in that case it won't work 
                            as we can't navigate to that specific popup page directly.. 
                        </p>
                        <p style ={{marginLeft:'3rem', marginRight:'3rem'}}>
                            Lastly, enter your desired price so that once the desiganted product price is less than or equals to the price you indicate, we will send an email notification 
                            to you :D.
                        </p>
                 </div>
                 <Footer />
                </div>
                
                 
                        
                
        </React.Fragment>
    )
}

export default LandingPage;
import React from 'react';

const Showcase = (props)=>{
    return(
        <>
		{/* <!-- Feature 20 --> */}
		<section class="py-10 py-lg-20 text-center text-md-start bg-bg-3" id="about-us">
			<div class="container">
				<div class="row justify-content-between mb-lg-20 mb-15">
					<div class="mb-lg-0 mb-4 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
						<h2 class="display-5">
							About us
						</h2>
					</div>
					<div class="col-md-8 col-lg-5">
						<p class="fs-2 mb-0">
							Sweet Jewels was born out of a passion for jewellery to create a company that makes beautiful creations.						
						</p>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-sm-8 col-md-4 mb-15 mb-md-0">
						<img src="https://i.imgur.com/OlTWAwm.jpg" class="w-100 mb-4 img-forced-showcase mb-6" alt=""/>
						<h4 class="mb-0">
							Durable
						</h4>
						{/* <p class="fs-4 mb-0">
							Our candles are hand poured in Montreal using a mixture of vegan soy and/or coconut wax. Ensuring that all resources are 100% vegan, with packaging largely recyclable, we pride ourselves on producing safe and natural products to complement your décor.
							Turn on screen reader support
						</p> */}
					</div>
					<div class="col-sm-8 col-md-4 mb-15 mb-md-0">
						<img src="https://i.imgur.com/MkxipFt.jpg" class="w-100 mb-4 img-forced-showcase mb-6" alt=""/>
						<h4 class="mb-0">
							Homemade
						</h4>
						{/* <p class="fs-4 mb-0">
							We want to offer our customers candles that do not contain any paraffin (therefore which are not toxic to health or the environment), unlike most candles found in stores. We also promote respect for the environment by using the best "eco-friendly" ingredients! We try to create the best high quality and affordable candles to add a good atmosphere to your home. At Candela Mtl you will find the candle to your image among our variety of options.
						</p> */}
					</div>
					<div class="col-sm-8 col-md-4">
						<img src="https://i.imgur.com/8upauQf.jpg" class="w-100 mb-4 img-forced-showcase mb-6" alt=""/>
						<h4 class="mb-4">
							Stylish
						</h4>
						{/* <p class="fs-4 mb-0">
							Would you like to have a personalized candle? Choose your name, your color or your fragrance, it's up to you.
						</p> */}
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default Showcase
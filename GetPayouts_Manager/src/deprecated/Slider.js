import React,{Component} from "react";
import ReactDOM from "react-dom";

class Slider extends Component {
  componentDidMount() {
    const script = document.createElement("script");    script.async = true;    script.src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";    this.div.appendChild(script);  }
  render() {
    return (
      <div className="Slider" ref={el => (this.div = el)}>
        <div className="slider">
							<div tabindex="0">
								<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 w-full"/>
							</div>
							<div tabindex="-1">
								<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 w-full"/>
							</div>
							<div tabindex="-1">
								<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 w-full"/>
							</div>
							<div tabindex="-1">
								<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 w-full"/>
							</div>
							<div tabindex="-1">
								<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 w-full"/>
							</div>
						</div>
						<div class="px-60 mt-15 slider_menu arrows-dark">
							<div class="px-1" tabindex="0">
								<a class="link img_link" tabindex="0">
									<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 mx-auto img-fluid"/>
								</a>
							</div>
							<div class="px-1" tabindex="0">
								<a class="link img_link" tabindex="0">
									<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 mx-auto img-fluid"/>
								</a>
							</div>
							<div class="px-1" tabindex="0">
								<a class="link img_link" tabindex="0">
									<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 mx-auto img-fluid"/>
								</a>
							</div>
							<div class="px-1" tabindex="0">
								<a class="link img_link" tabindex="0">
									<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 mx-auto img-fluid"/>
								</a>
							</div>
							<div class="px-1" tabindex="-1">
								<a class="link img_link" tabindex="-1">
									<img src="/assets/spaces/264ecb.jpg" alt="" class="radius10 mx-auto img-fluid"/>
								</a>
							</div>
						</div>
      </div>
    );
  }
}

export default Slider;
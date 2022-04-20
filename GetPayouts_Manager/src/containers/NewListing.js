import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
import HamburgerMenu from '../deprecated/HamburgerMenu';

const NewListing = ()=>{
    const [rangeval, setRangeval] = useState(null);
    return(
        <>
        <Navigation/>
        <HamburgerMenu/>
        <div class="pt-header-3 pb-30 bg-dark color-white">
            <div class="pb-60 bg-dark px-50">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <form action="form-handler.php" method="POST" class="row justify-content-between">
                                    <div class="col-xl-6 col-md-12 col-sm-12">
                                        <div class="mb-60 d-flex flex-wrap align-items-baseline justify-content-between">
                                            <h2 class="bold mb-10 mb-xl-0 mr-10 f-32 aos-animate">
                                                Let's get your product online
                                            </h2>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Product Name
                                                </div>
                                                <input type="text" name="firstname" placeholder="Give it a short-and-sweet title" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Product Type
                                                </div>
                                                <select type="text" name="firstname" placeholder="What type of product do you sell?" required="required" class="input select w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option>Fashion</option>
                                                    <option>Hygiene</option>
                                                    <option>Food &amp; drinks</option>
                                                    <option>Restaurant membership</option>
                                                    <option>Tools &amp; accessories</option>
                                                    <option>Real estate &amp; rentals</option>
                                                    <option>Content</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Max. Members (optional)
                                                </div>
                                                <select type="text" name="lastname" required="required" placeholder="0 - 100" class="input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                <option value="0">No maximum</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                                <option value="32">32</option>
                                                <option value="33">33</option>
                                                <option value="34">34</option>
                                                <option value="35">35</option>
                                                <option value="36">36</option>
                                                <option value="37">37</option>
                                                <option value="38">38</option>
                                                <option value="39">39</option>
                                                <option value="40">40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                                <option value="43">43</option>
                                                <option value="44">44</option>
                                                <option value="45">45</option>
                                                <option value="46">46</option>
                                                <option value="47">47</option>
                                                <option value="48">48</option>
                                                <option value="49">49</option>
                                                <option value="50">50</option>
                                                <option value="51">51</option>
                                                <option value="52">52</option>
                                                <option value="53">53</option>
                                                <option value="54">54</option>
                                                <option value="55">55</option>
                                                <option value="56">56</option>
                                                <option value="57">57</option>
                                                <option value="58">58</option>
                                                <option value="59">59</option>
                                                <option value="60">60</option>
                                                <option value="61">61</option>
                                                <option value="62">62</option>
                                                <option value="63">63</option>
                                                <option value="64">64</option>
                                                <option value="65">65</option>
                                                <option value="66">66</option>
                                                <option value="67">67</option>
                                                <option value="68">68</option>
                                                <option value="69">69</option>
                                                <option value="70">70</option>
                                                <option value="71">71</option>
                                                <option value="72">72</option>
                                                <option value="73">73</option>
                                                <option value="74">74</option>
                                                <option value="75">75</option>
                                                <option value="76">76</option>
                                                <option value="77">77</option>
                                                <option value="78">78</option>
                                                <option value="79">79</option>
                                                <option value="80">80</option>
                                                <option value="81">81</option>
                                                <option value="82">82</option>
                                                <option value="83">83</option>
                                                <option value="84">84</option>
                                                <option value="85">85</option>
                                                <option value="86">86</option>
                                                <option value="87">87</option>
                                                <option value="88">88</option>
                                                <option value="89">89</option>
                                                <option value="90">90</option>
                                                <option value="91">91</option>
                                                <option value="92">92</option>
                                                <option value="93">93</option>
                                                <option value="94">94</option>
                                                <option value="95">95</option>
                                                <option value="96">96</option>
                                                <option value="97">97</option>
                                                <option value="98">98</option>
                                                <option value="99">99</option>
                                                <option value="100">100</option>
                                                </select>
                                            </div>
                                            {/* <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-12 mb-10 f-18 semibold">
                                                    Page Options
                                                </div>
                                                <input type="checkbox" name="method" id="form_1_radio_paypal" value="PayPal" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 mb-10 f-18 medium color-white" for="form_1_radio_paypal">
                                                    Show Social Links
                                                </label>
                                                <input type="checkbox" name="method" id="form_2_radio_paypal" value="PayPal" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 mb-10 f-18 medium color-white" for="form_2_radio_paypal">
                                                    Show Location
                                                </label>
                                                <input type="checkbox" name="method" id="form_3_radio_paypal" value="PayPal" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 mb-10 f-18 medium color-white" for="form_3_radio_paypal">
                                                    Show Business Hours
                                                </label>
                                            </div> */}
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-12 mb-10 f-18 semibold">
                                                    Delivery Options
                                                </div>
                                                <input type="checkbox" name="method" id="form_4_radio_paypal" value="PayPal" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 mb-10 f-18 medium color-white" for="form_4_radio_paypal">
                                                    Shipping
                                                </label>
                                                <input type="checkbox" name="method" id="form_5_radio_paypal" value="PayPal" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 mb-10 f-18 medium color-white" for="form_5_radio_paypal">
                                                    Pick-Up
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    About your subscription
                                                </div>
                                                <input type="text" name="firstname" placeholder="Describe your subscription" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    About your business
                                                </div>
                                                <input type="text" name="firstname" placeholder="Tell customers a bit about yourself" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Location (optional)
                                                </div>
                                                <input type="text" name="firstname" placeholder="Add your Google Maps Place ID" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Social Links (optional)
                                                </div>
                                                <input type="text" name="firstname" placeholder="facebook.com/yourpage" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                                <input type="text" name="firstname" placeholder="instagram.com/yourpage" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                                <input type="text" name="firstname" placeholder="twitter.com/yourpage" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                                <input type="text" name="firstname" placeholder="linkedin.com/yourpage" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Monthly Pricing
                                                </div>
                                               <span class="f-20">I want to charge  ${rangeval} monthly</span>
                                                <input type="range" className="custom-range" min="10" max="200" 
                                                onChange={(event) => setRangeval(event.target.value)} />
                                                <span class="f-12 color-heading">For products over $200/month, please <a href="tel:+15147996839" class="underline">contact us</a></span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    Upload Photos (max. 3)
                                                </div>
                                                    <input class="input w-full border-gray focus-action-2 color-heading placeholder-heading h-200 pt-10-p" type="file" id="img" name="img" accept="image/*"/>
                                            </div>
                                        </div>
                                        {/* <div class="mb-30 block aos-animate">
                                            <div class="mb-10 f-18 semibold">
                                                Bank Information
                                            </div>
                                            <input type="text" name="firstname" placeholder="Transit Number" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading col-xl-5"/>
                                            <span class="col-xl-1"></span>
                                            <input type="text" name="firstname" placeholder="Institution Number" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading align-items-end col-xl-6"/>

                                            <input type="text" name="firstname" placeholder="Account Number" required="required" class="input w-full border-gray focus-action-2 color-heading placeholder-heading"/>
                                        </div> */}
                                    </div>








                                    <div class="mt-lg-0 col-xl-6 col-md-12 col-sm-12">
                                        <div class="pt-40 pb-40 radius20 holder fixed-desktop">
                                        {/* <div class="mb-35 d-flex flex-wrap justify-content-between align-items-center aos-animate">
                                            <div class="row">
                                            <div class="col-md-12 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                   Business Hours
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Monday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Tuesday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Wednesday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                            </div>
                                        <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Thursday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                            </div>
                                        <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Friday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                </div>
                                                <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Saturday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                            </div>
                                            <div class="col-md-12 mb-30 block aos-animate">
                                                <div class="col-md-5 mb-10 f-18 semibold">
                                                    <span class="f-8">Sunday</span>
                                                </div>
                                                <select type="text" name="phone" required="required" class="col-md-6 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                <span class="f-12 col-md-1"></span>
                                                <select type="text" name="phone" required="required" class="col-md-5 input w-full border-gray focus-action-2 color-heading placeholder-heading">
                                                    <option value="12 AM">12 AM</option>
                                                    <option value="1 AM">1 AM</option>
                                                    <option value="2 AM">2 AM</option>
                                                    <option value="3 AM">3 AM</option>
                                                    <option value="4 AM">4 AM</option>
                                                    <option value="5 AM">5 AM</option>
                                                    <option value="6 AM">6 AM</option>
                                                    <option value="7 AM">7 AM</option>
                                                    <option value="8 AM">8 AM</option>
                                                    <option value="9 AM">9 AM</option>
                                                    <option value="10 AM">10 AM</option>
                                                    <option value="11 AM">11 AM</option>
                                                    <option value="12 PM">12 PM</option>
                                                    <option value="1 PM">1 PM</option>
                                                    <option value="2 PM">2 PM</option>
                                                    <option value="3 PM">3 PM</option>
                                                    <option value="4 PM">4 PM</option>
                                                    <option value="5 PM">5 PM</option>
                                                    <option value="6 PM">6 PM</option>
                                                    <option value="7 PM">7 PM</option>
                                                    <option value="8 PM">8 PM</option>
                                                    <option value="9 PM">9 PM</option>
                                                    <option value="10 PM">10 PM</option>
                                                    <option value="11 PM">11 PM</option>
                                                </select>
                                                </div>
                                            </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-12 block">
                                                    </div>
                                                </div>
                                            </div> */}
                                            <button class="w-full d-flex align-items-center justify-content-center btn action-2">
                                                <span>
                                                    Save
                                                </span>
                                                <i class="fas fa-chevron-right f-12 ml-5">
                                                </i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <div class="mt-lg-0 col-xl-5 col-lg-6">
                                    <div class="mb-100 d-flex flex-wrap align-items-baseline justify-content-between sm-mb-0">
                                    </div>
                                        <div class="pb-40 radius20 holder fixed-desktop">
                                            <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate">
                                            <div class="row">
                                            <div class="col-md-12 block aos-animate">
                                                <div class="mb-10 f-18 semibold">
                                                    All done?
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-30 block aos-animate">
                                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12 col-sm-12 block">
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="w-full d-flex align-items-center justify-content-center btn action-2">
                                                <span>
                                                    Save
                                                </span>
                                                <i class="fas fa-chevron-right f-12 ml-5">
                                                </i>
                                            </button>
                                        </div>
                                    </div> */}
                                    <div class="mt-30 mt-lg-0 col-xl-5 col-lg-6 hide-mobile">
                                        <div class="pt-40 pb-40 radius20 holder">
                                        <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate">
                                        <div class="row">
                                        <div class="col-lg-6">
                                    </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default NewListing

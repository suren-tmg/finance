import React from 'react';
import './style.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from '../components/nav/footer/Footer';
import Header1 from '../components/nav/Header1';
import Header from '../components/nav/Header';

const About = () => {
  return (
    <div>
      <Header1/>
      <Header/>
      <div>
        <div className="about_image px-lg-5">
          <img src="./images/c2s.jpg" className='w-100 px-lg-5' alt="" />
        </div>
      </div>
      <div className="introduction pt-5 pb-5" >
        <div className="col-md-10 col-lg-10 offset-md-1 offset-lg-1">
          <h2 className='text-center mb-3 mb-lg-1 pt-4'><span>सहकारी परिचय</span></h2>
          <p className='mt-md-5 ps-3 pe-3'>
            झापा जिल्लाको पश्चिम दक्षिणको ग्रामिण भेगमा स्थित साविक महारानीझोडा गा.वि.स. हाल गौरादह नगरपालिका ४ र ५ मा २०५५ साल कार्तिक १० मा साना किसान विकास आयोजनाको स्थापना गरी साना किसान परिवारका महिलाहरु लाई समुहमा आवद्ध गराई प्रारम्भ गरेको कार्यक्रम समय र विकासक्रम तथा सदस्यहरुको चाहाना अनुसार २०५९ पौष १७ मा डिभिजन सहकारी कार्यलयमा विधिवत् रुपमा साना किसान सहकारी संस्था लि. दर्ता गरि उक्त आयोजनाको सम्पूर्ण कारोवार २०६० वैशाख ३ बाट हस्तान्तरण गरि महिलाहरुकै नेत्तृत्वमा संचालित छ । हाल संस्थामा १३ वटा अन्तर समुह, ३ सय ४ वटा साना किसान समुह गठन भै १ हजार ९ सय ५६ जना महिला सदस्यहरु आवद्ध हुनुहुन्छ ।
            यस संस्थाले स्थापना कालमा सदस्य विस्तार र पूँजी निर्माणलाई प्राथमिकतामा राखि सेयर सदस्यहरु लाई स्वरोजगार बनाउन व्याक्तिगत व्यावसाय संचालनका लागि कर्जा प्रदान गर्याे । क्रमस अगाडि बड्ने क्रममा कृषिसंग सम्बन्धित तालिम र सामाजिक सामुदायिक तथा सांस्कृतीक संरक्षणसंग सम्बन्धित कार्यक्रमहरु समेत संचालन गर्दै अगाडि बढ्यो । संस्थामा आवद्ध सदस्यहरुको संख्यामा बृद्धि, कारोवारेमा बृद्धि तथा जनशक्ती र व्यवस्थापन क्षमतामा समेत विकास गरी कृषिसंग सम्बन्धित कार्यक्रमहरु लाई प्राथमिकतामा राखेर आफ्ना गतिबिधिहरु सञ्चालन गरिरहेको छ ।

            संस्थाका सेयर सदस्यहरुको मुख्य व्यावसाय भनेकै कृषि रहेकोले पनी संस्थाले सदस्यहरु लाई कृषि पेशा मार्पmत रोजगार र सम्बृद्धि ल्याउनका लागि व्याक्तिगत, संस्थागत तथा सदस्य र संस्थाबीचको सहकार्यबाट परियोजना संचालन गर्ने रणनीति लिएको छ ।

            संस्था स्थापनाको करिव २ दशक र यसबीचमा संस्था मार्पmत कृषि क्षेत्रमा भएका प्रयासहरुकै कारणपनी संस्थाले बिगतको महारानीझोडा गा.वि.स. र हालको गौरादह नगरपालिका साथै सिंगो साना किसान विकास अभियानको नै पहिचान बन्न सफल भएकोछ । पहिचान बनाउने यो अवस्था सम्म ल्याउन संस्थामा आवद्ध सम्पूर्ण सेयर सदस्य र त्यस भित्रको संचालन र व्यवस्थापनमा लाग्नुभएका समिति, उपसमितिका महानुभाव र कर्मचारीहरु र यस अभियानमा जोडिनुभएका सहयोगी निकाय र व्याक्तिगत रुपमा समेत योजना बनाउन र कार्यान्वयनमा सहयोग गर्ने थुप्रै व्याक्तीहरुको समेत योगदान रहकोछ । अवका दिनमा यस संस्थाले संचालन गरीरहेका कृषिसंग सम्वन्धित कार्यक्रमका माध्यमबाट सदस्यको आर्थिक अवस्थामा सकारात्मक परिवर्तन ल्याउनुनै मुख्य उद्देश्य रहेको छ ।
            संस्थाले आफ्ना सदस्यहरुलाई वित्तिय तथा गैर वित्तिय सेवा प्रदान गरी कृषि तथा पशुको उत्पादन, उत्पादकत्व वृद्धिगरि उत्पादित बस्तुहरुको अद्यौगीकरण र वजारिकरण गर्ने एक नमुना सहकारी हुने परिकल्पना अगाडि सारेको छ ।  यस संस्थाले आगामी दिनमा ग्रामिण वचत तथा कृषि ऋण परिचालन । नयाँ प्रविधि र सिपको प्रयोग  र सहकारी खेतीको माध्यमबाट कृषि र पशु उत्पादन , प्रशोधन र वजारीकरण गर्ने उद्धेश्य अगाडि बढाएको छ । यसैगरी संस्थाले स्थानीय श्रम, सीप र पुँजीको विकास गरी सो को परिचालनवाट कृषि तथा पशुको उत्पादन र उत्पादकत्व वृद्धि गर्दै गरिवी न्यूनिकरण गर्ने ।
          </p>
        </div>
      </div>
      <div className="introduction bg-white pt-5 pb-5" >
        <div className="col-md-10 col-lg-10 offset-md-1 offset-lg-1">
          <h2 className='text-center mb-3 mb-lg-1 pt-4'><span>संस्थागत संरचना</span></h2>
          <p className='mt-md-5 ps-3 pe-3'>
            झापा जिल्लाको पश्चिम दक्षिणको ग्रामिण भेगमा स्थित साविक महारानीझोडा गा.वि.स. हाल गौरादह नगरपालिका ४ र ५ मा २०५५ साल कार्तिक १०
            मा साना किसान विकास आयोजनाको स्थापना गरी साना किसान परिवारका महिलाहरु लाई समुहमा आवद्ध गराई प्रारम्भ गरेको कार्यक्रम समय र विकासक्रम
            तथा सदस्यहरुको चाहाना अनुसार २०५९ पौष १७ मा डिभिजन सहकारी कार्यलयमा विधिवत् रुपमा साना किसान सहकारी संस्था लि. दर्ता गरि उक्त
            आयोजनाको सम्पूर्ण कारोवार २०६० वैशाख ३ बाट हस्तान्तरण गरि महिलाहरुकै नेत्तृत्वमा संचालित छ । हाल संस्थामा १३ वटा अन्तर समुह, ३ सय ४ वटा
            साना किसान समुह गठन भै १ हजार ९ सय ५६ जना महिला सदस्यहरु आवद्ध हुनुहुन्छ ।
            यस संस्थाले स्थापना कालमा सदस्य विस्तार र पूँजी निर्माणलाई प्राथमिकतामा राखि सेयर सदस्यहरु लाई स्वरोजगार बनाउन व्याक्तिगत व्यावसाय संचालनका
            लागि कर्जा प्रदान गर्याे । क्रमस अगाडि बड्ने क्रममा कृषिसंग सम्बन्धित तालिम र सामाजिक सामुदायिक तथा सांस्कृतीक संरक्षणसंग सम्बन्धित कार्यक्रमहरु
            समेत संचालन गर्दै अगाडि बढ्यो । संस्थामा आवद्ध सदस्यहरुको संख्यामा बृद्धि, कारोवारेमा बृद्धि तथा जनशक्ती र व्यवस्थापन क्षमतामा समेत विकास गरी
            कृषिसंग सम्बन्धित कार्यक्रमहरु लाई प्राथमिकतामा राखेर आफ्ना गतिबिधिहरु सञ्चालन गरिरहेको छ ।

            संस्थाका सेयर सदस्यहरुको मुख्य व्यावसाय भनेकै कृषि रहेकोले पनी संस्थाले सदस्यहरु लाई कृषि पेशा मार्पmत रोजगार र सम्बृद्धि ल्याउनका लागि
            व्याक्तिगत, संस्थागत तथा सदस्य र संस्थाबीचको सहकार्यबाट परियोजना संचालन गर्ने रणनीति लिएको छ ।

            संस्था स्थापनाको करिव २ दशक र यसबीचमा संस्था मार्पmत कृषि क्षेत्रमा भएका प्रयासहरुकै कारणपनी संस्थाले बिगतको महारानीझोडा गा.वि.स.
            र हालको गौरादह नगरपालिका साथै सिंगो साना किसान विकास अभियानको नै पहिचान बन्न सफल भएकोछ । पहिचान बनाउने यो अवस्था सम्म ल्याउन
            संस्थामा आवद्ध सम्पूर्ण सेयर सदस्य र त्यस भित्रको संचालन र व्यवस्थापनमा लाग्नुभएका समिति, उपसमितिका महानुभाव र कर्मचारीहरु र यस अभियानमा
            जोडिनुभएका सहयोगी निकाय र व्याक्तिगत रुपमा समेत योजना बनाउन र कार्यान्वयनमा सहयोग गर्ने थुप्रै व्याक्तीहरुको समेत योगदान रहकोछ ।
            अवका दिनमा यस संस्थाले संचालन गरीरहेका कृषिसंग सम्वन्धित कार्यक्रमका माध्यमबाट सदस्यको आर्थिक अवस्थामा सकारात्मक परिवर्तन ल्याउनुनै मुख्य
            उद्देश्य रहेको छ ।
            संस्थाले आफ्ना सदस्यहरुलाई वित्तिय तथा गैर वित्तिय सेवा प्रदान गरी कृषि तथा पशुको उत्पादन, उत्पादकत्व वृद्धिगरि उत्पादित बस्तुहरुको अद्यौगीकरण र
            वजारिकरण गर्ने एक नमुना सहकारी हुने परिकल्पना अगाडि सारेको छ ।  यस संस्थाले आगामी दिनमा ग्रामिण वचत तथा कृषि ऋण परिचालन । नयाँ प्रविधि
            र सिपको प्रयोग  र सहकारी खेतीको माध्यमबाट कृषि र पशु उत्पादन , प्रशोधन र वजारीकरण गर्ने उद्धेश्य अगाडि बढाएको छ । यसैगरी संस्थाले स्थानीय श्रम,
            सीप र पुँजीको विकास गरी सो को परिचालनवाट कृषि तथा पशुको उत्पादन र उत्पादकत्व वृद्धि गर्दै गरिवी न्यूनिकरण गर्ने ।
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
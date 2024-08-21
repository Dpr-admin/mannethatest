import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import PropertyPageSection from '../components/PropertyPageSection';
import Cta from '../components/Cta';
import PageTitle from '../common/PageTitle';

const Property = () => {
    return (
        <>
        <PageTitle title="Mannetha Infra" />

        <main className="body-bg">
            
            {/* Header */}
            <Header 
                headerClass="light-header has-border" 
                logoBlack={true}
                // logoWhite={true}
                headerMenusClass="mx-auto"
                btnClass="btn btn-outline-main btn-outline-main-light d-lg-block d-none"
                btnLink="/contact"
                btnText="Visit Us"
                spanClass="icon-right text-gradient" 
                showHeaderBtn={true}
                showOffCanvasBtn={false}
                offCanvasBtnClass=""
                showContactNumber={false}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="Property"
                pageName="Property"
            />

            {/* Property Page Section */}
            <PropertyPageSection/>

            {/* Cta */}
            <Cta ctaClass=""/>

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Property;
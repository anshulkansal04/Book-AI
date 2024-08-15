import React from "react";

const Pricing = () => {
    return (
        <div id="pricing">
            <div className="pricing-container" >
                <h2 className="pricing-title">API Pricing</h2>
                <p className="pricing-subtitle">
                    Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
                </p>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <img src="https://img.icons8.com/?size=100&id=FBO05Dys9QCg" alt="GPT-3.5 Logo" className="model-logo" />
                        <h3 className="model-name">GPT-3.5</h3>
                        <p className="price-label">Price per 1K Tokens:</p>
                        <p className="price">$0.002</p>
                    </div>
                    <div className="pricing-card">
                        <img src="https://img.icons8.com/?size=100&id=FBO05Dys9QCg" alt="GPT-4 Logo" className="model-logo" />
                        <h3 className="model-name">GPT-4</h3>
                        <p className="price-label">Price per 1K Tokens:</p>
                        <p className="price">$0.03</p>
                    </div>
                    <div className="pricing-card">
                        <img src="https://img.icons8.com/?size=100&id=15783" alt="Llama-2-70b Logo" className="model-logo" />
                        <h3 className="model-name">Llama-2-70b</h3>
                        <p className="price-label">Price per 1K Tokens:</p>
                        <p className="price">$0.0008</p>
                    </div>
                    <div className="pricing-card">
                        <img src="https://img.icons8.com/?size=100&id=15783" alt="Llama-2-13b Logo" className="model-logo" />
                        <h3 className="model-name">Llama-2-13b</h3>
                        <p className="price-label">Price per 1K Tokens:</p>
                        <p className="price">$0.0006</p>
                    </div>
                </div>
                <div className="pricing-footer">
                    <h2 className="pricing-title">Token Estimation</h2>
                    <p className="pricing-note">
                        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
                    </p>
                    <h2 className="pricing-title">Billing</h2>
                    <p className="pricing-billing">
                        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;



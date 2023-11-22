/* eslint-disable @next/next/no-before-interactive-script-outside-document */
"use client";
import Script from "next/script";
import React from "react";

const Chatbot = () => {
	return (
		<div>
			<Script
				src='https://cdn.botpress.cloud/webchat/v1/inject.js'
				strategy='beforeInteractive'
			/>
			<Script
				src='https://mediafiles.botpress.cloud/5b9adf49-934c-49b1-b05b-91b3d2d9fd8f/webchat/config.js'
				strategy='beforeInteractive'
				defer
			/>
		</div>
	);
};

export default Chatbot;

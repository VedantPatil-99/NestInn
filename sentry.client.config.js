// import * as Sentry from "@sentry/browser";

// Sentry.init({
// 	dsn: "https://6a1873ede6954b94808fce95e6d80bb0@o4509718351052800.ingest.us.sentry.io/4509719578279936",
// 	// Setting this option to true will send default PII data to Sentry.
// 	// For example, automatic IP address collection on events

// 	sendDefaultPii: true,
// 	integrations: [
// 		Sentry.browserTracingIntegration(),
// 		Sentry.replayIntegration(),
// 		Sentry.feedbackIntegration({
// 			colorScheme: "system",
// 			autoInject: true,
// 		}),
// 	],
// 	// Tracing
// 	tracesSampleRate: 1.0, //  Capture 100% of the transactions
// 	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
// 	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
// 	// Session Replay
// 	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
// 	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// 	debug: true,
// });

// console.log("Sentry object:", Sentry);

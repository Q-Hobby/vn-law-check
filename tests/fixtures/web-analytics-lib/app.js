// Bundle web có nhắc tên thư viện analytics, không phải mobile app
import mixpanel from "mixpanel-browser";
import * as amplitude from "@amplitude/analytics-browser";
mixpanel.init("demo"); amplitude.init("demo");
fetch("https://api.mixpanel.com/track", { method: "POST" });

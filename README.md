# Third-party-bot-templates

[![Supports VSC-DevContainers](https://img.shields.io/badge/Supports-VSC--DevContainers-informational?logo=visual-studio-code)](#3-about-the-vsc-devcontainer-setup)

## 1 Introduction

This repository is used to generate importable bot templates for [third-party bot vendors](https://developers.liveperson.com/third-party-bots-getting-started.html) that can be connected to [LivePersons Conversational Cloud](https://knowledge.liveperson.com/getting-started-the-liveperson-conversational-cloud.html).

### 1.1 The problem to be solved

LivePerson offers its brands to connect third party bots to their Conversational Cloud account.

Configuring those bots in the third party vendors editors from scratch can be pretty cumbersome. Especially if `rich content` that needs to be displayed on different messaging channels is involved. (see [next section](#12-bot-content-types) for more information) Therefore the templates offered in this repository aim to **serve as a starting point and a blueprint** for LivePerson brands that want to create bots in the vendor of their choice, accustomed to the capabilities of the Conversational Cloud.

Besides that, importing a template and connecting it to a test account is **a great way to discover the available functionalities of the Conversational Cloud** on different messaging channels.

### 1.2 Bot content types

In the context of the templates the content that gets sent by the bots to the Conversational Cloud is differentiated into three categories:

#### a) **`Plain text`**

When a bot sends a `plain text` payload to the Conversational Cloud, the message text included will be displayed unchanged to the end customer.

#### b) **`Vendor actions`**

When a bot sends a `vendor action` payload to the Conversational Cloud it is not treated like a regular message. Vendor actions rather contain instructions how the Conversational Cloud should proceed with the conversation. Example results of such instructions can be the closure or the transfer of the conversation.

#### c) **`Rich content`**.

When a bot sends a `rich content` payload to the Conversational Cloud, it gets interpreted and displayed to agents and the end customer according to the [LivePerson rich content definition](https://developers.liveperson.com/getting-started-with-rich-messaging-introduction.html).
It is important to note that `rich content` that works on one channel (e.g. Facebook) likely will not work the same or at all on another channel. Therefore one should always make sure that the bot knows on which channel the conversation is held and acts accordingly. This can either be achieved by simply asking the end customer directly or using a third party bot vendor that is capable of detecting the channel automatically. (e.g. IBM Watson)

### 1.3 Supported vendors

| Vendor | Template</br>available? | LivePerson</br>documentation| Import</br>instructions |
|-|:-:|-|-|
|**Amazon Lex**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-amazon-lex.html)|[Link](https://docs.aws.amazon.com/lex/latest/dg/import-from-lex.html)|
|**Custom Integrations**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-custom-integration.html)|:arrow_left: see LP-docs|
|**Google Dialogflow CX**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-google-dialogflow-cx.html)|[Link](https://cloud.google.com/dialogflow/cx/docs/concept/agent#export)|
|**Google Dialogflow ES**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-google-dialogflow-es-introduction.html)|[Link](https://cloud.google.com/dialogflow/es/docs/agents-settings#export)|
|**IBM Watson**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-ibm-watson-assistant.html)|[Link](https://cloud.ibm.com/docs/assistant?topic=assistant-backup#backup-import-skill)|
|**Microsoft Bot Framework**|:white_check_mark:|[Link](https://developers.liveperson.com/third-party-bots-microsoft-direct-line-introduction.html)|[Link](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-deploy-az-cli?view=azure-bot-service-4.0&tabs=csharp%2Cuserassigned)|
|**Microsoft Composer**| :white_check_mark: </br> :heavy_exclamation_mark: beta :heavy_exclamation_mark:|[Link](https://docs.microsoft.com/en-us/composer/introduction?tabs=v2x)|[Link](https://docs.microsoft.com/en-us/composer/how-to-publish-bot?tabs=v2x)|
|**Microsoft PVA**|:x:|[Link](https://developers.liveperson.com/third-party-bots-microsoft-direct-line-pva.html)|:x:|

> Bot Framework and Composer are so far only tested locally with the [emulator](https://github.com/microsoft/BotFramework-Emulator)

### 1.4 Conversation flow of the bots ( :framed_picture: **see diagram** :framed_picture: )

The following diagram illustrates how a conversation between a customer and a bot which is based on the templates is structured.

<details>
    <summary>Click to expand diagram</summary>

![Bot Flow Diagram](readmeResources/diagrams/bot-flow.drawio.svg)
</details>

## 2 Usage

### 2.1 Import instructions

See [supported vendors section](#13-supported-vendors) for links to specific import instructions of the different vendors.

### 2.2 Prerequisites for conversations to work

This section collects prerequisites that have to be fulfilled for certain `vendor actions` or `rich content` to work. The following tables are not a complete list of all `bot contents` available. They only cover those, which do not work out of the box.

#### a) Prerequisites for `vendor actions`

| `vendor action`-name | Description | Prerequisites |
|-|-|-|
| **Transfer to Skill** | Transfers the conversation to the next available agent that is assigned to the **configured skill**. | - The **configured skill** needs to exist and an agent assigned to it needs to be online.</br>- Default value for `skill` is `AgentSkill`. </br>- Bot needs to have the correct [permissions to transfer the conversation](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions).|
| **Transfer to Agent** | Transfers the conversation to the **configured agent**. The transfer switches to transferring to the **configured skill** if the agent is not online. | The **configured agent** and the **configured skill** need to exist.</br>- Default value for `skill` is `SpecificAgentSkill`.</br>- Default value for `agentId` is `1005369632`. </br>- Bot needs to have the correct [permissions to transfer the conversation](https://knowledge.liveperson.com/contact-center-management-messaging-operations-transfer-to-agent.html#permissions).|
| **Invoke Function** | During a conversation, it is possible to trigger a LivePerson Function that is deployed to the [LivePerson Functions (Function as a Service)](https://developers.liveperson.com/liveperson-functions-overview.html) platform. This provides a way to run custom logic with a bot. | See the [Lex documentation](https://developers.liveperson.com/third-party-bots-amazon-lex.html#invoke-liveperson-function) (works same for all vendors) for more information. |
|**Encoded Metadata**|Conversational Cloud Messaging platform provides a new metadata input type (`encodedMetadata`) for passing **base64 encoded metadata** on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.|- Messaging only. (not available in Chat conversations) </br> - Metadata size is limited to 5000 characters. </br>- Reach out to a LP-employee to activate this feature for your account. (provide them with [this link](https://confluence.liveperson.com/x/pAmaC))|

#### b) Prerequisites for `rich content`

>Information on **how to connect messaging channels** to your Conversational Cloud account:
>
>1. [Apple Business Chat](https://knowledge.liveperson.com/messaging-channels-apple-business-chat-setup-guide.html)
>2. [Facebook](https://knowledge.liveperson.com/messaging-channels-facebook-messenger.html)
>3. [Google Business Messages](https://knowledge.liveperson.com/messaging-channels-google-google-business-messages.html#setting-up-google-business-messages)
>4. [Google RCS Business Messaging](https://knowledge.liveperson.com/messaging-channels-google-google-rcs-business-messaging.html#setting-up-google-rcs)
>5. [Line](https://knowledge.liveperson.com/messaging-channels-line-connector.html)
>6. [WhatsApp](https://knowledge.liveperson.com/getting-started-quick-start-guides-whatsapp-quick-start.html)

| Relevant For... | Prerequisites |
|-|-|
|...all `rich content` containing domains, such as **images**, **buttons** and **external links**.  |  Domains have to be whitelisted by a LP-employee. (provide them with [this link](https://confluence.liveperson.com/x/pAmaC))|
| ...all `rich content` intended for the **Facebook Messaging channel**. | All domains of images, buttons and links have to be [**whitelisted in Facebook**](https://developers.liveperson.com/facebook-messenger-templates-introduction.html#facebook-messenger-setup). For the templates to work correctly whitelist the following domains:</br>- `https://i.imgur.com/`</br>- `https://www.google.com/`</br>- `https://www.liveperson.com/`</br>- `https://www.bellaloves.me/` |
| ...**[Date Picker Templates](https://developers.liveperson.com/mobile-sdk-and-web-templates-date-picker-template.html)** for the Web channel| Only supported on Conversational Cloud accounts using UMS version 4.2, contact a LivePerson employee to validate if your account qualifies for this feature.|
| ...**[Schedule Slot List Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-schedule-slot-list-template.html)** for the Web channel| Only supported on Conversational Cloud accounts using UMS version 4.2, contact a LivePerson employee to validate if your account qualifies for this feature.|

### 2.3 List of trigger commands :pencil:

Instead of navigating a conversation via quick replies, you can require specific `bot content` directly. This is achieved by sending the following trigger commands as a regular message into a conversation with a bot.

<details>
   <summary>Expand list</summary>

|Trigger command|Type|Description|
|-|-|-|
|`close conversation`|`vendor action`|Triggers the "Close Conversation"-vendor action.|
|`delay message`|`vendor action`|Triggers the "Delayed Message"-vendor action.|
|`encoded metadata`|`vendor action`|Triggers the "Encoded Metadata"-vendor action.|
|`Invoke function`|`vendor action`|Triggers the "Invoke Function"-vendor action.|
|`transfer to agent`|`vendor action`|Triggers the "Transfer to agent"-vendor action.|
|`transfer to skill`|`vendor action`|Triggers the "Transfer to Skill"-vendor action.|
|`private message`|`vendor action`|Triggers the "Private message"-vendor action.|
|`apple auth`|`rich content`-ABC|Makes the bot send an example of the [Apple Auth Template](https://developers.liveperson.com/apple-business-chat-templates-apple-auth-template.html).|
|`apple custom interactive message`|`rich content`-ABC|Makes the bot send an example of the [Apple Custom Interactive Message Template](https://developers.liveperson.com/apple-business-chat-templates-custom-interactive-message-template.html).|
|`apple list picker`|`rich content`-ABC|Makes the bot send an example of the [Apple List Picker Template](https://developers.liveperson.com/apple-business-chat-templates-list-picker-template.html).|
|`apple pay`|`rich content`-ABC|Makes the bot send an example of the [Apple Pay Template](https://developers.liveperson.com/apple-business-chat-templates-apple-pay-template.html).|
|`apple rich links`|`rich content`-ABC|Makes the bot send an example of the [Apple Rich Links Template](https://developers.liveperson.com/apple-business-chat-templates-rich-links-template.html).|
|`apple time picker`|`rich content`-ABC|Makes the bot send an example of the [Apple Time Picker Template](https://developers.liveperson.com/apple-business-chat-templates-time-picker-template.html). |
|`Button Template`|`rich content`-FB|Makes the bot send an example of the [Facebook Button Template](https://developers.liveperson.com/facebook-messenger-templates-button-template.html). |
|`Carousel Template`|`rich content`-FB|Makes the bot send an example of the [Facebook Carousel Template](https://developers.liveperson.com/facebook-messenger-templates-carousel-template.html). |
|`facebook generic template`|`rich content`-FB|Makes the bot send an example of the [Facebook Generic Template](https://developers.liveperson.com/facebook-messenger-templates-generic-template.html). |
|`Quick Replies Template`|`rich content`-FB|Makes the bot send an example of the [Facebook Quick Replies Template](https://developers.liveperson.com/facebook-messenger-templates-quick-replies-template.html). |
|`google business messages card`|`rich content`-GBM|Makes the bot send an example of the [GBM Card Template](https://developers.liveperson.com/google-business-messages-templates-card-template.html).|
|`google business messages carousel`|`rich content`-GBM|Makes the bot send an example of the [GBM Carousel Template](https://developers.liveperson.com/google-business-messages-templates-carousel-template.html). |
|`GBM quick replies`|`rich content`-GBM|Makes the bot send an example of the [GBM Quick Replies Template](https://developers.liveperson.com/google-business-messages-templates-quick-replies-template.html). |
|`Line card`|`rich content`-Line|Makes the bot send an example of the [Line Card Template](https://developers.liveperson.com/line-templates-card-template.html). |
|`line carousel`|`rich content`-Line|Makes the bot send an example of the [Line Carousel Template](https://developers.liveperson.com/line-templates-carousel-template.html). |
|`line quick replies`|`rich content`-Line|Makes the bot send an example of the [Line Quick Replies Template](https://developers.liveperson.com/line-templates-quick-replies-template.html). |
|`rcs card`|`rich content`-RCS|Makes the bot send an example of the [Google RCS Card Template](https://developers.liveperson.com/google-rcs-business-messaging-templates-card-template.html). |
|`rcs carousel`|`rich content`-RCS|Makes the bot send an example of the [Google RCS Carousel Template](https://developers.liveperson.com/google-rcs-business-messaging-templates-carousel-template.html). |
|`rcs quick replies`|`rich content`-RCS|Makes the bot send an example of the [Google RCS Quick Replies Template](https://developers.liveperson.com/google-rcs-business-messaging-templates-quick-replies-template.html). |
|`web card`|`rich content`-Web|Makes the bot send an example of the [Web Card Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-card-template.html). |
|`web carousel`|`rich content`-Web|Makes the bot send an example of the [Web Carousel Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-carousel-template.html). |
|`web date picker`|`rich content`-Web|Makes the bot send an example of the [Web Date Picker Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-date-picker-template.html). |
|`web multiple checklist`|`rich content`-Web|Makes the bot send an example of the [Web Multiple Checklist Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-multiple-checklist-template.html). |
|`web schedule slot list`|`rich content`-Web|Makes the bot send an example of the [Web Schedule Slot List Template](https://developers.liveperson.com/mobile-sdk-and-web-templates-schedule-slot-list-template.html). |
|`whatsapp reply button`|`rich content`-WA|Makes the bot send an example of the [WhatsApp Reply Button Template](https://developers.liveperson.com/whatsapp-business-messages-templates-reply-button-template.html). |
</details>

## 3 About the VSC-DevContainer-Setup

> For more general information about VSC-DevContainers see [here](https://code.visualstudio.com/docs/remote/containers).

> __Attention__: For better performance it is recommended to [clone the repository in a volume](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) rather than [opening the folder in the container](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container).

### 3.1 Features of the setup

- fully __functional and pre-configured Eslint setup__ for consistent file formatting.
- feature rich **[Jest extension](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) which automatically runs tests in the background** for live feedback.
- other convenient stuff like __more git tooling, spell checker, proper zsh installation, markdown linting, additional preview rendering, etc__

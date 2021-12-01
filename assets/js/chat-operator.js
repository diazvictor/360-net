// jshint esversion: 8
/**!
 * @package   360NET
 * @filename  chat-operator.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      01.12.2021 04:24:33 -04
 */

let chat = document.querySelector(".chat-operator .chat");
	chatBody = document.querySelector(".chat-operator .chat-body");
	chatToggle = document.getElementById("chat-toggle");
	chatClose = document.getElementById("chat-close");
	chatUpload = document.getElementById("chat-attach");
	chatMessage = document.getElementById("chat-message");
	chatSend = document.getElementById("chat-send");

chatToggle.addEventListener("click", (e) => {
	chat.classList.toggle("is-active");
});

chatClose.addEventListener("click", (e) => {
	chat.classList.remove("is-active");
});

let sendMessage = (message) => {
	if (chatMessage.value) {
		chatBody.innerHTML += `
			<div class="message is-sent">
				<p>
					${message}
				</p>
			</div>
		`;

		chatMessage.value = "";
	}
};

chatMessage.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {        
		sendMessage(chatMessage.value);
    }
});

chatSend.addEventListener("click", (e) => {
	sendMessage(chatMessage.value);
});

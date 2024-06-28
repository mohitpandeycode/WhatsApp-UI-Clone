let chaticon = document.querySelector(".chaticon");
let menu = document.querySelector(".menu");
let callicon = document.querySelector(".callicon");
let statusicon = document.querySelector(".statusicon");
let chat = document.querySelectorAll(".chats");
let profilepage = document.querySelector(".profilepage");
let settingspage = document.querySelector(".settingspage");
let user = document.querySelector(".user")
let settings = document.querySelector(".settings")
let leftbox = document.querySelector('.left')
let rightbox = document.querySelector('.right')
let icons = document.querySelectorAll('i')

// Add a click event listener  to the menu button
function setRightBoxWidth() {
    if (window.innerWidth <= 1000) {
        rightbox.style.width = "85vw";
    } else {
        rightbox.style.width = "96vw";
    }
}

menu.addEventListener('click', () => {
    setRightBoxWidth();
    window.addEventListener('resize', setRightBoxWidth);
    if (leftbox.style.display === "none" && (window.innerWidth >= 600)) {
        leftbox.style.display = "block";
        rightbox.style.width = "71vw";
        rightbox.style.borderRadius = "0";
    } 
    else if(leftbox.style.display === "none" && (window.innerWidth <= 600)){
        leftbox.style.display = "block";
        rightbox.style.width = "85vw";
        rightbox.style.borderRadius = "0";
    }
    else {
        leftbox.style.display = "none";
        setRightBoxWidth(); // Adjust width based on viewport width
        rightbox.style.borderRadius = "8px 0 0 5px";
    }
});
//add icon active action
// Add click event listener to each icon
icons.forEach(icon => {
    chaticon.style.backgroundColor = '#252525';
    chaticon.style.borderRadius = '3px';
    chaticon.style.borderLeft = '3px solid rgb(6, 167, 6)';
    icon.addEventListener('click', () => {
        // Remove the active class from all icons
        icons.forEach(i => {
            i.style.backgroundColor = '';
            i.style.borderRadius = '';
            i.style.borderLeft = '';
        });

        // Add the active class to the clicked icon
        icon.style.backgroundColor = '#252525';
        icon.style.borderRadius = '3px';
        icon.style.borderLeft = '3px solid rgb(6, 167, 6)';
    });
});

//add call button function
callicon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Calls</p>
                <div class="chatsymbols">
                    <i class="ri-phone-line"></i>
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <!-- search bar of whatsapp -->
            <div class="search">
                <input type="text" placeholder="Search or start a new call">
                <i class="ri-search-line"></i>
            </div>

            <div class="chatbox">
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg"><i class="ri-phone-line"></i> Outgoing</p>
                    </div>
                    <div class="time">Yesteday</div>
                </div>

                 <div class="chats">
                    <div class="profilepic">
                        <img src="images/glow.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg" style="color:#eb8080;"> <i class="fas fa-phone-slash"></i> Missed (2)</p>
                    </div>
                    <div class="time">05/07/2024</div>
                </div>

                 <div class="chats">
                    <div class="profilepic">
                        <img src="images/do.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Uddeshya Awasthi</p>
                        <p id="msg" style="color:#eb8080;"> <i class="ri-video-off-line"></i> Missed (5)</p>
                    </div>
                    <div class="time">03/02/2024</div>
                </div>
                `
});

chaticon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Chats</p>
                <div class="chatsymbols">
                    <i class="ri-chat-new-line"></i>
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <!-- search bar of whatsapp -->
            <div class="search">
                <input type="text" placeholder="Search or start a new chat">
                <i class="ri-search-line"></i>
            </div>

            <div class="chatbox">
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quae?</p>
                    </div>
                    <div class="time">4:41 Pm</div>
                </div>

                <div class="chats">
                    <div class="profilepic">
                        <img src="images/photo.jpg" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">2:45 Pm</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/glow.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Ashish Pandey</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">11:41 Am</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Darshan Rawal</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">9:39 Am</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/do.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Uddeshya Awasthi</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">12:15 Pm</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Sanjay Pandey</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">3:26 Pm</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Nischay Diwedi</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">8:30 Pm</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/WhatsApp Image 2023-07-12 at 20.44.18.jpg" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Sakasham Sahni</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">7:41 Am</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">4:41 Pm</div>
                </div>
                <div class="chats">
                    <div class="profilepic">
                        <img src="images/blank-profile-picture-973460_1280.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Rakshit Joshi</p>
                        <p id="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, sint!</p>
                    </div>
                    <div class="time">5:15 Pm</div>
                </div>
            </div>`
});


//add status icon functionality.
statusicon.addEventListener('click', () => {
    leftbox.innerHTML = `
    <div class="chat">
                <p>Status</p>
                <div class="chatsymbols">
                    <i class="ri-menu-5-line"></i>
                </div>
            </div>

            <div class="chatbox">
                <div style="justify-content: start; gap: 20px;" class="chats">
                    <div style="border: 3px solid green; padding:2px;" class="profilepic">
                        <img src="images/photo.jpg" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Mohit Pandey</p>
                        <p id="msg">Today, 2:45 Pm</p>
                    </div>
                </div>
                <h4>Viewd Updates</h4>
                 <div class="chatbox">
                <div style="justify-content: start; gap: 20px;" class="chats">
                    <div style="border: 3px solid #434343; padding:2px;" class="profilepic">
                        <img src="images/glow.png" alt="">
                    </div>
                    <div class="info">
                        <p id="name">Harsh Pandey</p>
                        <p id="msg">Today, 5:45 Pm</p>
                    </div>
                </div>`
});


//add user logo profile page function
profilepage.addEventListener('click', (event) => {
    event.stopPropagation();
})
user.addEventListener('click', (event) => {
    event.stopPropagation();
    profilepage.style.left = "10px"
})

document.addEventListener('click', (event) => {
    profilepage.style.left = "-500px"
})

//add settings logo setiings page function
settingspage.addEventListener('click', (event) => {
    event.stopPropagation();
})
settings.addEventListener('click', (event) => {
    event.stopPropagation();
    settingspage.style.left = "10px"
})

document.addEventListener('click', (event) => {
    settingspage.style.left = "-500px"
})
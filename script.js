const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const approveBtn = document.getElementById("approveBtn");
const denyBtn = document.getElementById("denyBtn");
const closeModal = document.getElementById("closeModal");


// APPROVE BUTTON
approveBtn.addEventListener("click", () => {

    modalContent.innerHTML = `
        <div style="font-size:50px;">🎉</div>

        <h2>REQUEST APPROVED</h2>

        <p>
            Thank you for your consideration.
        </p>

        <p>
            Emily has officially been released
            for temporary Baruch custody.
        </p>

        <p>
            Don't worry — we'll take good care of her. ❤️
        </p>
    `;

    modal.classList.add("show");
});


// DENY BUTTON
denyBtn.addEventListener("click", () => {

    modalContent.innerHTML = `
        <div style="font-size:50px;">😭</div>

        <h2>REQUEST DENIED</h2>

        <p>
            Your decision has officially been recorded.
        </p>

        <p>
            Would you like to reconsider before
            Baruch begins preparing his 47-page appeal?
        </p>

        <p style="font-size:12px;color:#777;">
            Just kidding 😂
        </p>

        <p>
            Your decision is respected.
        </p>
    `;

    modal.classList.add("show");
});


// CLOSE MODAL
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});


// CLOSE IF CLICKING OUTSIDE THE BOX
modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});

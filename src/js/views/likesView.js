import { elements } from "./base";
import { limitRecipeTitle } from "./searchView";

export const toggleLike = (isLiked) => {
    const iconSting = isLiked ? "icon-heart" : "icon-heart-outlined";

    document
        .querySelector(".recipe__love use")
        .setAttribute("href", `img/icons.svg#${iconSting}`);
};

export const toggleLikeMenu = (numLikes) => {
    elements.likesMenu.style.visibility = numLikes > 0 ? "visible" : "hidden";
};

export const renderLike = (like) => {
    const murkup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
    `;

    elements.likesList.insertAdjacentHTML("beforeend", murkup);
};

export const deleteLike = (id) => {
    const el = document.querySelector(`.likes__link[href="#${id}"]`)
        .parentElement;

    if (el) el.parentElement.removeChild(el);
};

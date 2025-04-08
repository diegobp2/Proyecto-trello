import elements from "./elementos.js";

const view_control = {
    user: {
        profile: "" // Initialize the profile property
    },
    update_view(which_view) {
        this.encourage("hide-card","hide-note");
        setTimeout(() => {
            elements.formlogin.style.display = which_view == 0 ? "flex" : "none";
            elements.formregis.style.display = which_view == 1 ? "flex" : "none";
            elements.profile.style.display = which_view == 2 ? "flex" : "none";
            elements.header.style.bottom = which_view == 3 ? "0" : "100%";
            elements.divnotes.style.display= which_view == 3 ? "flex" : "none";
            elements.divmain.style.display = which_view == 3 ? "none" : "flex";
            this.encourage("show-card","show-note");
        }, 500);
    },
    encourage(show_hide) {
        elements.divmain.className = `cont-regis ${show_hide}`;
        elements.formNotes.className= `form-note ${show_hide}`;
        // elements.groupnotes.className = `notes ${show_hide_notes}`;
    }
};

export default view_control;

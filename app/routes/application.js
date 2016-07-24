import Ember from 'ember';

let appNavBarLinks = [{
    label: "Weijia Luo",
    dest: "index"
}, {
    label: "About Me",
    dest: "about"
}, {
    label: "Projects",
    dest: "projects"
}, {
    label: "Blog",
    dest: "blog"
}, {
    label: "Contact",
    dest: "contact"
}];

export default Ember.Route.extend({

    model() {
        return appNavBarLinks;
    }
});

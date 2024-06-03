package kr.kowl.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/form")
public class FormController {

    @GetMapping("/archive")
    public String archive(Model model) {
        model.addAttribute("data", "Archive");
        return "form/archive";
    }
    @GetMapping("/bookmark")
    public String bookmark(Model model) {
        model.addAttribute("data", "bookmark");
        return "form/bookmark";
    }
    @GetMapping("/cart")
    public String cart(Model model) {
        model.addAttribute("data", "cart");
        return "form/cart";
    }
    @GetMapping("/person")
    public String person(Model model) {
        model.addAttribute("data", "person");
        return "form/person";
    }
    @GetMapping("/shop")
    public String shop(Model model) {
        model.addAttribute("data", "shop");
        return "form/shop";
    }
}

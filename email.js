/* ============================================================
   UNIKAT NAMEŠTAJ — EmailJS
   Slanje upita / porudžbina sa sajta
   ============================================================ */

const EMAILJS_CONFIG = {
  publicKey: "3yBy3arNSvWEaEYVG",
  serviceId: "service_8vcauc8",
  templateId: "template_00pz9b9"
};


/* ------------------------------------------------------------
   EmailJS inicijalizacija
   ------------------------------------------------------------ */

function initEmailJS() {
  if (typeof emailjs === "undefined") {
    console.error("EmailJS biblioteka nije učitana.");
    return false;
  }

  emailjs.init({
    publicKey: EMAILJS_CONFIG.publicKey
  });

  return true;
}


/* ------------------------------------------------------------
   Pomoćne funkcije
   ------------------------------------------------------------ */

function getFormValue(form, name) {
  const field = form.elements[name];

  if (!field) return "";

  return field.value.trim();
}


function setFormStatus(form, message, type = "") {
  const status = form.querySelector(".form-status");

  if (!status) return;

  status.textContent = message;

  status.className = "form-status show";

  if (type) {
    status.classList.add(type);
  }
}


function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]");

  let valid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      valid = false;
    }
  });

  return valid;
}


/* ------------------------------------------------------------
   Priprema podataka za EmailJS
   ------------------------------------------------------------ */

function getEmailData(form) {

  const formType = form.dataset.form || "contact";

  const data = {
    form_type:
      formType === "order"
        ? "Upit sa konfiguratora"
        : "Kontakt forma",

    name: getFormValue(form, "name"),
    email: getFormValue(form, "email"),
    phone: getFormValue(form, "phone"),
    message: getFormValue(form, "message"),

    product: getFormValue(form, "product"),

    bodyColor: getFormValue(form, "bodyColor"),
    accentColor: getFormValue(form, "accentColor"),

    dims: getFormValue(form, "dims"),
    address: getFormValue(form, "address"),

    page_url: window.location.href,

    sent_at: new Date().toLocaleString("sr-RS")
  };

  return data;
}


/* ------------------------------------------------------------
   Slanje forme
   ------------------------------------------------------------ */

async function sendEmailForm(form) {

  const submitButton = form.querySelector(
    'button[type="submit"]'
  );

  const originalButtonText =
    submitButton ? submitButton.textContent : "";


  /* VALIDACIJA */

  if (!validateForm(form)) {

    setFormStatus(
      form,
      "Molimo popunite sva obavezna polja.",
      "err"
    );

    return;
  }


  /* EMAIL VALIDACIJA */

  const email = getFormValue(form, "email");

  if (email) {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      setFormStatus(
        form,
        "Molimo unesite ispravnu email adresu.",
        "err"
      );

      return;
    }
  }


  /* DISABLE DUGMETA TOKOM SLANJA */

  if (submitButton) {

    submitButton.disabled = true;

    submitButton.textContent =
      "Slanje...";
  }


  setFormStatus(
    form,
    "Šaljemo vaš upit..."
  );


  const templateParams =
    getEmailData(form);


  try {

    const response =
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );


    console.log(
      "Email uspešno poslat:",
      response
    );


    setFormStatus(
      form,
      "Hvala! Vaš upit je uspešno poslat. Javićemo vam se u najkraćem roku.",
      "ok"
    );


    /*
       Čuvamo izabrane dekore pre resetovanja forme
       kako konfigurator ne bi vizuelno bio poremećen.
    */

    const product =
      getFormValue(form, "product");

    const bodyColor =
      getFormValue(form, "bodyColor");

    const accentColor =
      getFormValue(form, "accentColor");


    form.reset();


    /*
       Vraćamo hidden podatke nakon resetovanja.
    */

    if (form.elements.product)
      form.elements.product.value =
        product;

    if (form.elements.bodyColor)
      form.elements.bodyColor.value =
        bodyColor;

    if (form.elements.accentColor)
      form.elements.accentColor.value =
        accentColor;


  } catch (error) {

    console.error(
      "Greška pri EmailJS slanju:",
      error
    );


    setFormStatus(
      form,
      "Došlo je do greške prilikom slanja. Pokušajte ponovo ili nas kontaktirajte direktno.",
      "err"
    );

  } finally {

    if (submitButton) {

      submitButton.disabled = false;

      submitButton.textContent =
        originalButtonText;
    }
  }
}


/* ------------------------------------------------------------
   Aktivacija svih formi
   ------------------------------------------------------------ */

function initEmailForms() {

  if (!initEmailJS()) return;


  document
    .querySelectorAll("form[data-form]")
    .forEach(form => {

      form.addEventListener(
        "submit",
        function (event) {

          event.preventDefault();

          sendEmailForm(form);

        }
      );

    });
}


/* ------------------------------------------------------------
   Pokretanje
   ------------------------------------------------------------ */

document.addEventListener(
  "DOMContentLoaded",
  initEmailForms
);
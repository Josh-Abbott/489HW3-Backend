function appendAlert(message, type) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  }

  function validateEmail() {
    const email = document.getElementById("email").value;
    const valid = email.includes("@");
    const validDomains = ['.com', '.org', '.edu'];
    const domain = email.slice(email.lastIndexOf('.'));
    if (!valid || !validDomains.includes(domain)) {
      appendAlert("Invalid email!", "danger");
      return false;
    }
    return true;
  }

  function validateFirst() {
    const fname = document.getElementById("fname").value;
    const valid = fname.length >= 5 && fname.length <= 20;
    if (!valid) {
      appendAlert("Invalid first name!", "danger");
      return false;
    }
    return true;
  }

  function validateForm() {
    return validateEmail() && validateFirst();
  }
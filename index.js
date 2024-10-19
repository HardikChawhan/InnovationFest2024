document.getElementById("submitButton").onclick = function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect form values
  const category = document.getElementById("category").value;
  const projectTitle = document.getElementById("project-title").value;
  const teamLeadName = document.getElementById("team-lead-name").value;
  const leadMobile = document.getElementById("lead-mobile").value;
  const leadEmail = document.getElementById("lead-email").value;
  const leadInstitute = document.getElementById("lead-institute").value;

  const member1 = {
    name: document.getElementById("member1-name").value,
    mobile: document.getElementById("member1-mobile").value,
    email: document.getElementById("member1-email").value,
    institute: document.getElementById("member1-institute").value,
  };

  const member2 = {
    name: document.getElementById("member2-name").value,
    mobile: document.getElementById("member2-mobile").value,
    email: document.getElementById("member2-email").value,
    institute: document.getElementById("member2-institute").value,
  };

  const member3 = {
    name: document.getElementById("member3-name").value,
    mobile: document.getElementById("member3-mobile").value,
    email: document.getElementById("member3-email").value,
    institute: document.getElementById("member3-institute").value,
  };

  const member4 = {
    name: document.getElementById("member4-name").value,
    mobile: document.getElementById("member4-mobile").value,
    email: document.getElementById("member4-email").value,
    institute: document.getElementById("member4-institute").value,
  };

  const transactionId = document.getElementById("transaction-id").value;

  // Log the collected data
  console.log({
    category,
    projectTitle,
    teamLead: {
      name: teamLeadName,
      mobile: leadMobile,
      email: leadEmail,
      institute: leadInstitute,
    },
    members: [member1, member2, member3, member4],
    transactionId,
  });
};

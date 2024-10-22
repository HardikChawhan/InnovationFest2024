document.getElementById("submitButton").onclick = function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Collect form values
  const category = document.getElementById("category").value;
  const projectTitle = document.getElementById("project-title").value;
  const teamLeadName = document.getElementById("team-lead-name").value;
  const leadMobile = document.getElementById("lead-mobile").value; // Moved up for validation
  const leadEmail = document.getElementById("lead-email").value;
  const leadInstitute = document.getElementById("lead-institute").value;
  const transactionId = document.getElementById("transaction-id").value; // Collect transaction ID

  // Check for required fields
  if (!category || !projectTitle || !teamLeadName || !leadMobile || !leadEmail || !leadInstitute || !transactionId) {
    alert("Please fill in all required fields."); // Alert if required fields are missing
    return; // Stop further execution
  }

  // Determine project ID based on the selected category
  let projectid = 0;
  switch (category) {
    case 'creative-design':
      projectid = 2;
      break;
    case 'technical-project':
      projectid = 3;
      break;
    case 'innovative-startup':
      projectid = 4;
      break;
    case 'web-design':
      projectid = 5;
      break;
    case 'blind-coding':
      projectid = 1;
      break;
  }

  // Create member objects
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

  // Fetch request to generate QR code
  fetch('http://192.168.29.31:5000/generate_qr', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_category: category,
      title: projectTitle,
      team_lead: teamLeadName,
      institute: leadInstitute,
      email: leadEmail,
      mobile: leadMobile,
      pid: projectid,
      transaction_id: transactionId,
      members: [member1, member2, member3, member4]
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('QR code generated successfully!');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('An error occurred while generating the QR code.');
  });

  // Log the collected data (if needed)
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

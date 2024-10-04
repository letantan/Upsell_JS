// Function to inject upsell HTML content
function injectUpsellContent() {
    // Define the HTML content you want to inject
    var upsellHTML = `
        <img src="https://i.imgur.com/V7bsWeS.png" alt="Sale" style="width: 180px; vertical-align: middle; margin-right: 10px;">
        <h2 style="display: inline; vertical-align: middle; margin: 0;">Add a Digital Learning and Adventure pack</h2>
        <p style="font-size: 18px;">
          <img src="https://i.imgur.com/cuPXinU.jpeg" alt="Sale" style="width:70px;">
          <span style="font-size: 24px; text-decoration: line-through; color: red;">$4.99</span>
          <span style="font-size: 24px; font-weight: bold; color: black;"> $3.99</span>,
          <span style="font-weight: bold; color: black;">20% off today!</span>
        </p>
        <table>
          <tr>
            <td style="vertical-align: top; padding-right: 10px;">
              <img src="https://i.imgur.com/JwMuYa0.png" alt="Digital Learning Pack" style="width: 200px;">
              <img src="https://i.imgur.com/todUdNy.jpeg" alt="No Downloads Required" style="width: 200px; padding-top: 10px;">
              <p><span style="font-weight: 400; "><b>&nbsp; &nbsp; No Download required </b></span></p>
            </td>
            <td>
              <p><span style="font-weight: 400;">Elevate your Adventure! Unlock the <b>Ultimate Digital Learning and Adventure Pack</b> on your personal smartphone or connected tablets (no download required)!</span></p>
              <p><span style="font-weight: 400;">Transform your experience with our <b>action-packed</b> Digital Learning and Adventure Pack on your personal smartphone. Unlock a world of <b>exciting challenges, virtual rewards, and AI-powered learning content</b>. Don't miss out on this opportunity to take your journey to the Midway to new heights!&nbsp;</span></p>
              <p><span style="font-weight: 400;">Features:&nbsp;</span></p>
              <ul>
                <li style="font-weight: 400;"><span style="font-weight: 400;">Embark on thrilling Rescue Missions 🚁</span></li>
                <li style="font-weight: 400;"><span style="font-weight: 400;">Conquer engaging Scavenger Hunts 🗺️ </span></li>
                <li style="font-weight: 400;"><span style="font-weight: 400;">Soar through our Flight Academy ✈️ </span></li>
                <li style="font-weight: 400;"><span style="font-weight: 400;">Get answers from an AI Expert 💡 </span></li>
                <li style="font-weight: 400;"><span style="font-weight: 400;">Collect exclusive Virtual Prizes 🏆</span></li>
              </ul>

              <!-- Testimonial Section -->
              <p><b> What customers are saying</b></p>
              <table style="width: auto; border-collapse: collapse;">
                <tr>
                  <td style="vertical-align: top; padding-right: 2px;">
                    <blockquote style="font-style: italic; border-left: 4px solid #ccc; padding-left: 5px; margin: 0;">
                      "⭐⭐⭐⭐⭐ Definitely recommend. It is a fun experience overall" 
                    </blockquote>
                  </td>
                  <td style="vertical-align: top; padding-left: 2px;">
                    <blockquote style="font-style: italic; border-left: 4px solid #ccc; padding-left: 5px; margin: 0;">
                      "⭐⭐⭐⭐⭐ Easy to use and informational"
                    </blockquote>
                  </td>
                </tr>
              </table>
              <p>Don't miss out—join the excitement today!</p>
            </td>
          </tr>
        </table>
    `;

    // Find the container element where the upsell content should be injected
    var upsellContainer = document.getElementById('upsell-container');
    
    // If the container exists, inject the HTML content
    if (upsellContainer) {
        upsellContainer.innerHTML = upsellHTML;
    }
}

// Run the function when the page is fully loaded
window.onload = function() {
    injectUpsellContent();
};

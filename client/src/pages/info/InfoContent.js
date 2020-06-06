import React from "react";
import { WEBSITE_URL } from "../../constants";

const nitsujLinks = [
  { name: "@nit.su.j", url: "https://www.instagram.com/nit.su.j/" },
  {
    name: "github repo",
    url: "https://github.com/just-ma/nitsuj/",
  },
];
const personalLinks = [
  { name: "@_justma", url: "https://www.instagram.com/_justma/" },
  { name: "majust.in", url: "https://majust.in/" },
];

export const infoContent = [
  {
    id: "about",
    title: "About",
    body: (
      <div>
        <p>My name is Justin and I make shirts and websites:)</p>
        <br />
        {nitsujLinks.map((e) => (
          <p>
            <a href={e.url} target="_blank">
              {e.name}
            </a>
          </p>
        ))}
        <br />
        {personalLinks.map((e) => (
          <p>
            <a href={e.url} target="_blank">
              {e.name}
            </a>
          </p>
        ))}
      </div>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    body: (
      <div>
        <b>How much do you charge for shipping?</b>
        <p>$5 flat rate wordwide</p>
        <br />
        <b>When will my order arrive?</b>
        <p>
          Shirts are printed on demand. Printing takes 2-7 business days, and
          shipping speeds are the following:
        </p>
        <ul>
          <li>USA: 3-5 business days</li>
          <li>Canada: 5-10 business days</li>
          <li>International: 10-20 business days</li>
        </ul>
        <br />
        <b>What shirt do you print on?</b>
        <p>I use a Men's Champion T-Shirt.</p>
        <ul>
          <li>100% cotton</li>
          <li>Oxford Gray Heather is 90% cotton, 10% polyester</li>
          <li>Fabric weight: 7 oz/yd² (237.34 g/m²)</li>
          <li>1" bound ribbed crew neck</li>
          <li>Relaxed, oversized fit</li>
          <li>Deep armholes for ease and mobility</li>
          <li>Double-needle stitching on sleeves and bottom hem</li>
          <li>Champion “C” logo patch on the left sleeve</li>
        </ul>
        <br />
        <b>What are the shirt dimensions? (inches)</b>
        <table>
          <thead>
            <tr>
              <th>Size</th>
              <th>Length</th>
              <th>Chest</th>
              <th>Sleeve Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>26</td>
              <td>34 – 36</td>
              <td>18 3/4</td>
            </tr>
            <tr>
              <td>M</td>
              <td>28 1/2</td>
              <td>38 – 40</td>
              <td>19 3/4</td>
            </tr>
            <tr>
              <td>L</td>
              <td>30 1/2</td>
              <td>42 – 44</td>
              <td>20 3/4</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>31 1/2</td>
              <td>46 – 48</td>
              <td>22</td>
            </tr>
          </tbody>
        </table>
        Product measurements may vary by up to 2".
        <ul>
          <li>
            <i>Length</i> - Place the end of the tape beside the collar at the
            top of the tee (Highest Point Shoulder). Pull the tape measure to
            the bottom of the shirt.
          </li>
          <li>
            <i>Chest</i> - Measure yourself around the fullest part of your
            chest. Keep the tape measure horizontal.
          </li>
          <li>
            <i>Sleeve Length</i> - Place the end of the tape at the center back
            of the collar, then pull the tape measure along the top seam of the
            sleeve. When you get to the shoulder hold the tape in place at the
            shoulder and continue to pull down the sleeve until you reach the
            hem of the sleeve.
          </li>
        </ul>
        <br />
        <b>How do I return an order?</b>
        <p>
          Please contact me (nit.su.j.apparel@gmail.com) if you need to return a
          shirt. See the Refund Policy tab for more info.
        </p>
      </div>
    ),
  },
  {
    id: "refund_policy",
    title: "Refund Policy",
    body: (
      <div>
        <b>Returns</b>
        <p>
          Please contact us if you need to return an item. To be eligible for a
          return, your item must be unused and in the same condition that you
          received it. It must also be in the original packaging with a receipt
          or proof of purchase.
        </p>
        <p>
          <i>Wrong Order</i> - If the shirts you received do not match the ones
          you ordered, please return the shirt, and we will refund your order.
        </p>
        <p>
          <i>Damaged</i> - Any claims for misprinted/damaged/defective shirts
          must be submitted within 30 days after the product has been received.
          Please return the shirt, and we will refund your order.
        </p>
        <p>
          <i>Lost</i> - For packages lost in transit, all claims must be
          submitted no later than 30 days after the estimated delivery date.
          Claims deemed an error on our part are covered by us.
        </p>
        <p>
          <i>Wrong Address</i> - If you provide an address that is considered
          insufficient by the courier, the shipment will be returned to us. You
          will be liable for reshipment costs once we have confirmed an updated
          address.
        </p>
        <p>
          Other - We do not refund orders for buyer’s remorse, and size
          exchanges are not offered.
        </p>
        <br />
        <b>Refunds</b>
        <p>
          Once your return is received and inspected, we will send you an email
          to notify you that we have received your returned item. We will also
          notify you of the approval or rejection of your refund. If you are
          approved, then your refund will be processed, and a credit will
          automatically be applied to your credit card or original method of
          payment, within a certain amount of days.
        </p>
        <p>
          Late or missing refunds - If you haven’t received a refund yet, first
          check your bank account again. Then contact your credit card company,
          it may take some time before your refund is officially posted. Next
          contact your bank. There is often some processing time before a refund
          is posted. If you’ve done all of this and you still have not received
          your refund yet, please contact us at nit.su.j.apparel@gmail.com.
        </p>
        <br />
        <b>Shipping</b>
        <p>
          You will be responsible for paying for your own shipping costs for
          returning your item. Shipping costs are non-refundable. If you receive
          a refund, the cost of return shipping will be deducted from your
          refund.
        </p>
        <p>
          Depending on where you live, the time it may take for your exchanged
          product to reach you, may vary.
        </p>
        <p>
          If you are shipping an item over $75, you should consider using a
          trackable shipping service or purchasing shipping insurance. We don’t
          guarantee that we will receive your returned item.
        </p>
      </div>
    ),
  },
  {
    id: "privacy_policy",
    title: "Privacy Policy",
    body: (
      <div>
        <b>Privacy Policy</b>
        <p>LAST UPDATED: May 15, 2020</p>
        <p>
          {`NIT SU J. ("us", "we", or "our") operates the ${WEBSITE_URL} website (the "Service").`}
          <br />
        </p>
        <p>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </p>
        <p>
          We use your data to provide and improve the Service. By using the
          Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy
          Policy, terms used in this Privacy Policy have the same meanings as in
          our Terms and Conditions, accessible from{" "}
          <a href={WEBSITE_URL}>{WEBSITE_URL}</a>
        </p>
        <p>
          SECTION 1 - INFORMATION COLLECTION AND USE
          <br />
        </p>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our Service to you.
          <br />
        </p>
        <p>
          TYPES OF DATA COLLECTED:
          <br />
        </p>
        <p>Personal Data</p>
        <p>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you ("Personal Data"). Personally identifiable information
          may include, but is not limited to:
        </p>
        <ul>
          <li>
            <p>Email address</p>
          </li>
          <li>
            <p>First name and last name</p>
          </li>
          <li>
            <p>Address, State, Province, ZIP/Postal code, City</p>
          </li>
          <li>
            <p>Cookies and Usage Data</p>
          </li>
        </ul>
        <p>
          Usage Data
          <br />
        </p>
        <p>
          We may also collect information how the Service is accessed and used
          ("Usage Data"). This Usage Data may include information such as your
          computer's Internet Protocol address (e.g. IP address), browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>
        <p>
          Tracking &amp; Cookies Data
          <br />
        </p>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our Service and hold certain information.
        </p>
        <p>
          Cookies are files with small amount of data which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your device. Tracking technologies also used are
          beacons, tags, and scripts to collect and track information and to
          improve and analyze our Service.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Service.
        </p>
        <p>Examples of Cookies we use:</p>
        <ul>
          <li>
            <p>
              Session Cookies. We use Session Cookies to operate our Service.
            </p>
          </li>
          <li>
            <p>
              Preference Cookies. We use Preference Cookies to remember your
              preferences and various settings.
            </p>
          </li>
          <li>
            <p>
              Security Cookies. We use Security Cookies for security purposes.
            </p>
          </li>
        </ul>
        <p>
          SECTION 2 - USE OF DATA
          <br />
        </p>
        <p>
          NIT SU J. uses the collected data for various purposes:
          <br />
        </p>
        <ul>
          <li>
            <p>To provide and maintain the Service</p>
          </li>
          <li>
            <p>To notify you about changes to our Service</p>
          </li>
          <li>
            <p>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </p>
          </li>
          <li>
            <p>To provide customer care and support</p>
          </li>
          <li>
            <p>
              To provide analysis or valuable information so that we can improve
              the Service
            </p>
          </li>
          <li>
            <p>To monitor the usage of the Service</p>
          </li>
          <li>
            <p>To detect, prevent and address technical issues</p>
          </li>
        </ul>
        <p>
          SECTION 3 - TRANSFER OF DATA
          <br />
        </p>
        <p>
          Your information, including Personal Data, may be transferred to — and
          maintained on — computers located outside of your state, province,
          country or other governmental jurisdiction where the data protection
          laws may differ than those from your jurisdiction.
          <br />
        </p>
        <p>
          If you are located outside United States and choose to provide
          information to us, please note that we transfer the data, including
          Personal Data, to United States and process it there.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of
          such information represents your agreement to that transfer.
        </p>
        <p>
          NIT SU J. will take all steps reasonably necessary to ensure that your
          data is treated securely and in accordance with this Privacy Policy
          and no transfer of your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of your data and other personal information.
        </p>
        <p>
          SECTION 4 - DISCLOSURE OF DATA
          <br />
        </p>
        <p>
          LEGAL REQUIREMENTS:
          <br />
        </p>
        <p>
          NIT SU J. may disclose your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul>
          <li>
            <p>To comply with a legal obligation</p>
          </li>
          <li>
            <p>To protect and defend the rights or property of NIT SU J.</p>
          </li>
          <li>
            <p>
              To prevent or investigate possible wrongdoing in connection with
              the Service
            </p>
          </li>
          <li>
            <p>
              To protect the personal safety of users of the Service or the
              public
            </p>
          </li>
          <li>
            <p>To protect against legal liability</p>
          </li>
        </ul>
        <p>
          SECTION 5 - SECURITY OF DATA
          <br />
        </p>
        <p>
          The security of your data is important to us, but remember that no
          method of transmission over the Internet, or method of electronic
          storage is 100% secure. While we strive to use commercially acceptable
          means to protect your Personal Data, we cannot guarantee its absolute
          security.
          <br />
        </p>
        <p>
          SECTION 6 - SERVICE PROVIDERS
          <br />
        </p>
        <p>
          We may employ third party companies and individuals to facilitate our
          Service ("Service Providers"), to provide the Service on our behalf,
          to perform Service-related services or to assist us in analyzing how
          our Service is used.
          <br />
        </p>
        <p>
          These third parties have access to your Personal Data only to perform
          these tasks on our behalf and are obligated not to disclose or use it
          for any other purpose.
        </p>
        <p>
          SECTION 7 - LINKS TO OTHER SITES
          <br />
        </p>
        <p>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.
          <br />
        </p>
        <p>
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third party sites or services.
        </p>
        <p>
          SECTION 8 - CHILDREN'S PRIVACY
          <br />
        </p>
        <p>
          Our Service does not address anyone under the age of 18 ("Children").
          <br />
        </p>
        <p>
          We do not knowingly collect personally identifiable information from
          anyone under the age of 18. If you are a parent or guardian and you
          are aware that your Children has provided us with Personal Data,
          please contact us. If we become aware that we have collected Personal
          Data from children without verification of parental consent, we take
          steps to remove that information from our servers.
        </p>
        <p>
          SECTION 9 - CHANGES TO THIS PRIVACY POLICY
          <br />
        </p>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
          <br />
        </p>
        <p>
          We will let you know via email and/or a prominent notice on our
          Service, prior to the change becoming effective and update the
          "effective date" at the top of this Privacy Policy.
          <br />
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
          <br />
        </p>
        <p>
          CONTACT US
          <br />
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
          <br />
        </p>
        <p></p>
        <ul>
          <li>
            <p>By email: nit.su.j.apparel@gmail.com</p>
          </li>
          <li>
            <p>
              {`By visiting this page on our website: ${WEBSITE_URL}/info#contact`}
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "terms_of_service",
    title: "Terms of Service",
    body: (
      <div>
        <p>TERMS OF USE</p>
        <p>Last updated&nbsp;May 15, 2020</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>AGREEMENT TO TERMS</p>
        <p>
          These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&ldquo;you&rdquo;)
          and&nbsp;NIT SU J.&nbsp;("<strong>Company</strong>", &ldquo;
          <strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, or
          &ldquo;<strong>our</strong>&rdquo;), concerning your access to and use
          of the&nbsp;
          <a href={WEBSITE_URL}>
            <span>{WEBSITE_URL}</span>
          </a>
          &nbsp;website as well as any other media form, media channel, mobile
          website or mobile application related, linked, or otherwise connected
          thereto (collectively, the &ldquo;Site&rdquo;). You agree that by
          accessing the Site, you have read, understood, and agreed to be bound
          by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE
          TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE
          AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms of Use at any time and for any
          reason. We will alert you about any changes by updating the
          &ldquo;Last updated&rdquo; date of these Terms of Use, and you waive
          any right to receive specific notice of each such change. It is your
          responsibility to periodically review these Terms of Use to stay
          informed of updates. You will be subject to, and will be deemed to
          have been made aware of and to have accepted, the changes in any
          revised Terms of Use by your continued use of the Site after the date
          such revised Terms of Use are posted.
        </p>
        <p>
          The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country. Accordingly, those persons who choose to
          access the Site from other locations do so on their own initiative and
          are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable.
        </p>
        <p>
          The Site is intended for users who are at least 13 years of age. All
          users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Site. If
          you are a minor, you must have your parent or guardian read and agree
          to these Terms of Use prior to you using the Site.
        </p>
        <p>&nbsp;</p>
        <p>INTELLECTUAL PROPERTY RIGHTS</p>
        <p>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the &ldquo;Content&rdquo;) and the trademarks, service
          marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned
          or controlled by us or licensed to us, and are protected by copyright
          and trademark laws and various other intellectual property rights and
          unfair competition laws of the United States, international copyright
          laws, and international conventions. The Content and the Marks are
          provided on the Site &ldquo;AS IS&rdquo; for your information and
          personal use only. Except as expressly provided in these Terms of Use,
          no part of the Site and no Content or Marks may be copied, reproduced,
          aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed, or
          otherwise exploited for any commercial purpose whatsoever, without our
          express prior written permission.
        </p>
        <p>
          Provided that you are eligible to use the Site, you are granted a
          limited license to access and use the Site and to download or print a
          copy of any portion of the Content to which you have properly gained
          access solely for your personal, non-commercial use. We reserve all
          rights not expressly granted to you in and to the Site, the Content
          and the Marks.
        </p>
        <p>&nbsp;</p>
        <p>USER REPRESENTATIONS&nbsp;</p>
        <p>
          By using the Site, you represent and warrant that:&nbsp;(1) you have
          the legal capacity and you agree to comply with these Terms of
          Use;&nbsp;(2) you are not under the age of 13;&nbsp;(3) you are not a
          minor in the jurisdiction in which you reside, or if a minor, you have
          received parental permission to use the Site; (4) you will not access
          the Site through automated or non-human means, whether through a bot,
          script or otherwise; (5) you will not use the Site for any illegal or
          unauthorized purpose; and (6) your use of the Site will not violate
          any applicable law or regulation.
        </p>
        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
        </p>
        <p>&nbsp;</p>
        <p>PRODUCTS</p>
        <p>
          We make every effort to display as accurately as possible the colors,
          features, specifications, and details of the products available on the
          Site. However, we do not guarantee that the colors, features,
          specifications, and details of the products will be accurate,
          complete, reliable, current, or free of other errors, and your
          electronic display may not accurately reflect the actual colors and
          details of the products.&nbsp;All products are subject to
          availability, and we cannot guarantee that items will be in stock. We
          reserve the right to discontinue any products at any time for any
          reason. Prices for all products are subject to change.
        </p>
        <p>&nbsp;</p>
        <p>PURCHASES AND PAYMENT</p>
        <p>We accept the following forms of payment:</p>
        <p>- &nbsp;Visa</p>
        <p>- &nbsp;Mastercard</p>
        <p>- &nbsp;American Express</p>
        <p>- &nbsp;Discover</p>
        <p>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Site. You further
          agree to promptly update account and payment information, including
          email address, payment method, and payment card expiration date, so
          that we can complete your transactions and contact you as needed.
          Sales tax will be added to the price of purchases as deemed required
          by us. We may change prices at any time. All payments shall
          be&nbsp;in&nbsp;U.S. dollars.&nbsp;
        </p>
        <p>
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order.&nbsp;We reserve the right to correct any errors or
          mistakes in pricing, even if we have already requested or received
          payment.
        </p>
        <p>
          We reserve the right to refuse any order placed through the Site. We
          may, in our sole discretion, limit or cancel quantities purchased per
          person, per household, or per order. These restrictions may include
          orders placed by or under the same customer account, the same payment
          method, and/or orders that use the same billing or shipping address.
          We reserve the right to limit or prohibit orders that, in our sole
          judgment, appear to be placed by dealers, resellers, or distributors.
        </p>
        <p>&nbsp;</p>
        <p>RETURN&nbsp;POLICY</p>
        <p>
          Please review our Return Policy posted on the Site prior to making any
          purchases.
        </p>
        <p>&nbsp;</p>
        <p>PROHIBITED ACTIVITIES&nbsp;</p>
        <p>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>
        <p>As a user of the Site, you agree not to:</p>
        <p>
          1.&nbsp;&nbsp;Circumvent, disable, or otherwise interfere with
          security-related features of the Site, including features that prevent
          or restrict the use or copying of any Content or enforce limitations
          on the use of the Site and/or the Content contained therein.
        </p>
        <p>
          2.&nbsp;&nbsp;Make improper use of our support services or submit
          false reports of abuse or misconduct.
        </p>
        <p>
          3.&nbsp;&nbsp;Interfere with, disrupt, or create an undue burden on
          the Site or the networks or services connected to the Site.
        </p>
        <p>
          4.&nbsp;&nbsp;Use any information obtained from the Site in order to
          harass, abuse, or harm another person.
        </p>
        <p>
          5.&nbsp;&nbsp;Use the Site as part of any effort to compete with us or
          otherwise use the Site and/or the Content for any revenue-generating
          endeavor or commercial enterprise.
        </p>
        <p>
          6.&nbsp;&nbsp;Attempt to bypass any measures of the Site designed to
          prevent or restrict access to the Site, or any portion of the Site.
        </p>
        <p>
          7.&nbsp;&nbsp;Harass, annoy, intimidate, or threaten any of our
          employees or agents engaged in providing any portion of the Site to
          you.
        </p>
        <p>
          8.&nbsp;&nbsp;Delete the copyright or other proprietary rights notice
          from any Content.
        </p>
        <p>
          9.&nbsp;&nbsp;Upload or transmit (or attempt to upload or to transmit)
          viruses, Trojan horses, or other material, including excessive use of
          capital letters and spamming (continuous posting of repetitive text),
          that interferes with any party&rsquo;s uninterrupted use and enjoyment
          of the Site or modifies, impairs, disrupts, alters, or interferes with
          the use, features, functions, operation, or maintenance of the Site.
        </p>
        <p>
          10.&nbsp;&nbsp;Upload or transmit (or attempt to upload or to
          transmit) any material that acts as a passive or active information
          collection or transmission mechanism, including without limitation,
          clear graphics interchange formats (&ldquo;gifs&rdquo;), 1&times;1
          pixels, web bugs, cookies, or other similar devices (sometimes
          referred to as &ldquo;spyware&rdquo; or &ldquo;passive collection
          mechanisms&rdquo; or &ldquo;pcms&rdquo;).
        </p>
        <p>
          11.&nbsp;&nbsp;Disparage, tarnish, or otherwise harm, in our opinion,
          us and/or the Site.
        </p>
        <p>
          12.&nbsp;&nbsp;Use the Site in a manner inconsistent with any
          applicable laws or regulations.
        </p>
        <p>&nbsp;</p>
        <p>USER GENERATED CONTRIBUTIONS&nbsp;</p>
        <p>
          The Site does not offer users to submit or post content. We may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions"). Contributions may be viewable by other users of the
          Site and through third-party websites. As such, any Contributions you
          transmit may be treated in accordance with the Site Privacy Policy.
          When you create or make available any Contributions, you thereby
          represent and warrant that:
        </p>
        <p>
          1. &nbsp;The creation, distribution, transmission, public display, or
          performance, and the accessing, downloading, or copying of your
          Contributions do not and will not infringe the proprietary rights,
          including but not limited to the copyright, patent, trademark, trade
          secret, or moral rights of any third party.
        </p>
        <p>
          2. &nbsp;You are the creator and owner of or have the necessary
          licenses, rights, consents, releases, and permissions to use and to
          authorize us, the Site, and other users of the Site to use your
          Contributions in any manner contemplated by the Site and these Terms
          of Use.
        </p>
        <p>
          3. &nbsp;You have the written consent, release, and/or permission of
          each and every identifiable individual person in your Contributions to
          use the name or likeness of each and every such identifiable
          individual person to enable inclusion and use of your Contributions in
          any manner contemplated by the Site and these Terms of Use.
        </p>
        <p>
          4. &nbsp;Your Contributions are not false, inaccurate, or misleading.
        </p>
        <p>
          5. &nbsp;Your Contributions are not unsolicited or unauthorized
          advertising, promotional materials, pyramid schemes, chain letters,
          spam, mass mailings, or other forms of solicitation.
        </p>
        <p>
          6. &nbsp;Your Contributions are not obscene, lewd, lascivious, filthy,
          violent, harassing, libelous, slanderous, or otherwise objectionable
          (as determined by us).
        </p>
        <p>
          7. &nbsp;Your Contributions do not ridicule, mock, disparage,
          intimidate, or abuse anyone.
        </p>
        <p>
          8. &nbsp;Your Contributions do not advocate the violent overthrow of
          any government or incite, encourage, or threaten physical harm against
          another.
        </p>
        <p>
          9. &nbsp;Your Contributions do not violate any applicable law,
          regulation, or rule.
        </p>
        <p>
          10. &nbsp;Your Contributions do not violate the privacy or publicity
          rights of any third party.
        </p>
        <p>
          11. &nbsp;Your Contributions do not contain any material that solicits
          personal information from anyone under the age of 18 or exploits
          people under the age of 18 in a sexual or violent manner.
        </p>
        <p>
          12. &nbsp;Your Contributions do not violate any applicable law
          concerning child pornography, or otherwise intended to protect the
          health or well-being of minors;
        </p>
        <p>
          13. &nbsp;Your Contributions do not include any offensive comments
          that are connected to race, national origin, gender, sexual
          preference, or physical handicap.
        </p>
        <p>
          14. &nbsp;Your Contributions do not otherwise violate, or link to
          material that violates, any provision of these Terms of Use, or any
          applicable law or regulation.
        </p>
        <p>
          Any use of the Site or the Marketplace Offerings in violation of the
          foregoing violates these Terms of Use and may result in, among other
          things, termination or suspension of your rights to use the Site and
          the Marketplace Offerings.
        </p>
        <p>&nbsp;</p>
        <p>CONTRIBUTION LICENSE</p>
        <p>
          You and Site agree that we may access, store, process, and use any
          information and personal data that you provide following the terms of
          the Privacy Policy and your choices (including settings).
        </p>
        <p>
          By submitting suggestions or other feedback regarding the Site, you
          agree that we can use and share such feedback for any purpose without
          compensation to you.
        </p>
        <p>
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Site. You are
          solely responsible for your Contributions to the Site and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </p>
        <p>&nbsp;</p>
        <p>MOBILE APPLICATION LICENSE</p>
        <p>Use License</p>
        <p>
          If you access the Marketplace Offerings via a mobile application, then
          we grant you a revocable, non-exclusive, non-transferable, limited
          right to install and use the mobile application on wireless electronic
          devices owned or controlled by you, and to access and use the mobile
          application on such devices strictly in accordance with the terms and
          conditions of this mobile application license contained in these Terms
          of Use. You shall not: (1) decompile, reverse engineer, disassemble,
          attempt to derive the source code of, or decrypt the application; (2)
          make any modification, adaptation, improvement, enhancement,
          translation, or derivative work from the application; (3) violate any
          applicable laws, rules, or regulations in connection with your access
          or use of the application; (4) remove, alter, or obscure any
          proprietary notice (including any notice of copyright or trademark)
          posted by us or the licensors of the application; (5) use the
          application for any revenue generating endeavor, commercial
          enterprise, or other purpose for which it is not designed or intended;
          (6) make the application available over a network or other environment
          permitting access or use by multiple devices or users at the same
          time; (7) use the application for creating a product, service, or
          software that is, directly or indirectly, competitive with or in any
          way a substitute for the application; (8) use the application to send
          automated queries to any website or to send any unsolicited commercial
          e-mail; or (9) use any proprietary information or any of our
          interfaces or our other intellectual property in the design,
          development, manufacture, licensing, or distribution of any
          applications, accessories, or devices for use with the application.
        </p>
        <p>&nbsp;</p>
        <p>Apple and Android Devices</p>
        <p>
          The following terms apply when you use a mobile application obtained
          from either the Apple Store or Google Play (each an &ldquo;App
          Distributor&rdquo;) to access the Marketplace Offerings: (1) the
          license granted to you for our mobile application is limited to a
          non-transferable license to use the application on a device that
          utilizes the Apple iOS or Android operating systems, as applicable,
          and in accordance with the usage rules set forth in the applicable App
          Distributor&rsquo;s terms of service; (2) we are responsible for
          providing any maintenance and support services with respect to the
          mobile application as specified in the terms and conditions of this
          mobile application license contained in these Terms of Use or as
          otherwise required under applicable law, and you acknowledge that each
          App Distributor has no obligation whatsoever to furnish any
          maintenance and support services with respect to the mobile
          application; (3) in the event of any failure of the mobile application
          to conform to any applicable warranty, you may notify the applicable
          App Distributor, and the App Distributor, in accordance with its terms
          and policies, may refund the purchase price, if any, paid for the
          mobile application, and to the maximum extent permitted by applicable
          law, the App Distributor will have no other warranty obligation
          whatsoever with respect to the mobile application; (4) you represent
          and warrant that (i) you are not located in a country that is subject
          to a U.S. government embargo, or that has been designated by the U.S.
          government as a &ldquo;terrorist supporting&rdquo; country and (ii)
          you are not listed on any U.S. government list of prohibited or
          restricted parties; (5) you must comply with applicable third-party
          terms of agreement when using the mobile application, e.g., if you
          have a VoIP application, then you must not be in violation of their
          wireless data service agreement when using the mobile application; and
          (6) you acknowledge and agree that the App Distributors are
          third-party beneficiaries of the terms and conditions in this mobile
          application license contained in these Terms of Use, and that each App
          Distributor will have the right (and will be deemed to have accepted
          the right) to enforce the terms and conditions in this mobile
          application license contained in these Terms of Use against you as a
          third-party beneficiary thereof.
        </p>
        <p>&nbsp;</p>
        <p>SUBMISSIONS</p>
        <p>
          You acknowledge and agree that any questions, comments, suggestions,
          ideas, feedback, or other information regarding the Site or the
          Marketplace Offerings ("Submissions") provided by you to us are
          non-confidential and shall become our sole property. We shall own
          exclusive rights, including all intellectual property rights, and
          shall be entitled to the unrestricted use and dissemination of these
          Submissions for any lawful purpose, commercial or otherwise, without
          acknowledgment or compensation to you. You hereby waive all moral
          rights to any such Submissions, and you hereby warrant that any such
          Submissions are original with you or that you have the right to submit
          such Submissions. You agree there shall be no recourse against us for
          any alleged or actual infringement or misappropriation of any
          proprietary right in your Submissions.
        </p>
        <p>&nbsp;</p>
        <p>THIRD-PARTY WEBSITES AND CONTENT</p>
        <p>
          The Site may contain (or you may be sent via the Site or the
          Marketplace Offerings) links to other websites
          ("Third-Party&nbsp;Websites") as well as articles, photographs, text,
          graphics, pictures, designs, music, sound, video, information,
          applications, software, and other content or items belonging to or
          originating from third parties ("Third-Party Content").
          Such&nbsp;Third-Party&nbsp;Websites and&nbsp;Third-Party&nbsp;Content
          are not investigated, monitored, or checked for accuracy,
          appropriateness, or completeness by us, and we are not responsible for
          any Third Party Websites accessed through the Site or
          any&nbsp;Third-Party&nbsp;Content posted on, available through, or
          installed from the Site, including the content, accuracy,
          offensiveness, opinions, reliability, privacy practices, or other
          policies of or contained in the&nbsp;Third-Party&nbsp;Websites or
          the&nbsp;Third-Party&nbsp;Content. Inclusion of, linking to, or
          permitting the use or installation of
          any&nbsp;Third-Party&nbsp;Websites or any&nbsp;Third-PartyContent does
          not imply approval or endorsement thereof by us. If you decide to
          leave the Site and access the&nbsp;Third-Party&nbsp;Websites or to use
          or install any&nbsp;Third-Party&nbsp;Content, you do so at your own
          risk, and you should be aware these Terms of Use no longer govern. You
          should review the applicable terms and policies, including privacy and
          data gathering practices, of any website to which you navigate from
          the Site or relating to any applications you use or install from the
          Site. Any purchases you make through&nbsp;Third-Party&nbsp;Websites
          will be through other websites and from other companies, and we take
          no responsibility whatsoever in relation to such purchases which are
          exclusively between you and the applicable third party. You agree and
          acknowledge that we do not endorse the products or services offered
          on&nbsp;Third-Party&nbsp;Websites and you shall hold us harmless from
          any harm caused by your purchase of such products or services.
          Additionally, you shall hold us harmless from any losses sustained by
          you or harm caused to you relating to or resulting in any way from
          any&nbsp;Third-Party&nbsp;Content or any contact
          with&nbsp;Third-Party&nbsp;Websites.
        </p>
        <p>&nbsp;</p>
        <p>SITE MANAGEMENT</p>
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the Site
          for violations of these Terms of Use; (2) take appropriate legal
          action against anyone who, in our sole discretion, violates the law or
          these Terms of Use, including without limitation, reporting such user
          to law enforcement authorities; (3) in our sole discretion and without
          limitation, refuse, restrict access to, limit the availability of, or
          disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Site or
          otherwise disable all files and content that are excessive in size or
          are in any way burdensome to our systems; and (5) otherwise manage the
          Site in a manner designed to protect our rights and property and to
          facilitate the proper functioning of the Site and the Marketplace
          Offerings.
        </p>
        <p>&nbsp;</p>
        <p>PRIVACY POLICY</p>
        <p>
          We care about data privacy and security. Please review our Privacy
          Policy:&nbsp;
          <a href={WEBSITE_URL + "/info#privacy_policy"}>
            {`${WEBSITE_URL}/info#privacy_policy`}
          </a>
          . By using the Site or the Marketplace Offerings, you agree to be
          bound by our Privacy Policy, which is incorporated into these Terms of
          Use. Please be advised the Site and the Marketplace Offerings are
          hosted in&nbsp;the&nbsp;United States. If you access the Site or the
          Marketplace Offerings from any other region of the world with laws or
          other requirements governing personal data collection, use, or
          disclosure that differ from applicable laws in&nbsp;the&nbsp;United
          States, then through your continued use of the Site, you are
          transferring your data to&nbsp;the&nbsp;United States, and you
          expressly consent to have your data transferred to and processed
          in&nbsp;the&nbsp;United States.&nbsp;Further, we do not knowingly
          accept, request, or solicit information from children or knowingly
          market to children. Therefore, in accordance with the U.S.
          Children&rsquo;s Online Privacy Protection Act, if we receive actual
          knowledge that anyone under the age of 13 has provided personal
          information to us without the requisite and verifiable parental
          consent, we will delete that information from the Site as quickly as
          is reasonably practical.
        </p>
        <p>&nbsp;</p>
        <p>TERM AND TERMINATION</p>
        <p>
          These Terms of Use shall remain in full force and effect while you use
          the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE,
          WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
          LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE
          OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR
          ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH
          OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS
          OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
          USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR
          DELETE&nbsp;ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
          WITHOUT WARNING, IN OUR SOLE DISCRETION.&nbsp;
        </p>
        <p>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </p>
        <p>&nbsp;</p>
        <p>MODIFICATIONS AND INTERRUPTIONS</p>
        <p>
          We reserve the right to change, modify, or remove the contents of the
          Site at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Site. We also reserve the right to modify or discontinue all or
          part of the Marketplace Offerings without notice at any time. We will
          not be liable to you or any third party for any modification, price
          change, suspension, or discontinuance of the Site or the Marketplace
          Offerings.
        </p>
        <p>
          We cannot guarantee the Site and the Marketplace Offerings will be
          available at all times. We may experience hardware, software, or other
          problems or need to perform maintenance related to the Site, resulting
          in interruptions, delays, or errors. We reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Site or
          the Marketplace Offerings at any time or for any reason without notice
          to you. You agree that we have no liability whatsoever for any loss,
          damage, or inconvenience caused by your inability to access or use the
          Site or the Marketplace Offerings during any downtime or
          discontinuance of the Site or the Marketplace Offerings. Nothing in
          these Terms of Use will be construed to obligate us to maintain and
          support the Site or the Marketplace Offerings or to supply any
          corrections, updates, or releases in connection therewith.
        </p>
        <p>&nbsp;</p>
        <p>CORRECTIONS</p>
        <p>
          There may be information on the Site that contains typographical
          errors, inaccuracies, or omissions that may relate to the Marketplace
          Offerings, including descriptions, pricing, availability, and various
          other information. We reserve the right to correct any errors,
          inaccuracies, or omissions and to change or update the information on
          the Site at any time, without prior notice.
        </p>
        <p>&nbsp;</p>
        <p>DISCLAIMER</p>
        <p>
          THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE
          THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SITE&rsquo;S CONTENT OR THE CONTENT OF
          ANY WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR
          RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF
          CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
          NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE,
          (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
          AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
          THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
          THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY
          BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
          ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
          POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO
          NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY
          PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
          FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A
          PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
          BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS
          WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY
          ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION
          WHERE APPROPRIATE.
        </p>
        <p>&nbsp;</p>
        <p>LIMITATIONS OF LIABILITY</p>
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES.
        </p>
        <p>&nbsp;</p>
        <p>INDEMNIFICATION</p>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&rsquo; fees and
          expenses, made by any third party due to or arising out of:&nbsp;(1)
          use of the Site; (2) breach of these Terms of Use; (3) any breach of
          your representations and warranties set forth in these Terms of Use;
          (4) your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Site with whom you connected via the
          Site. Notwithstanding the foregoing, we reserve the right, at your
          expense, to assume the exclusive defense and control of any matter for
          which you are required to indemnify us, and you agree to cooperate, at
          your expense, with our defense of such claims. We will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>
        <p>&nbsp;</p>
        <p>USER DATA</p>
        <p>
          We will maintain certain data that you transmit to the Site for the
          purpose of managing the performance of the Site, as well as data
          relating to your use of the Site. Although we perform regular routine
          backups of data, you are solely responsible for all data that you
          transmit or that relates to any activity you have undertaken using the
          Site. You agree that we shall have no liability to you for any loss or
          corruption of any such data, and you hereby waive any right of action
          against us arising from any such loss or corruption of such data.
        </p>
        <p>&nbsp;</p>
        <p>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</p>
        <p>
          Visiting the Site, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Site, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO
          THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER
          RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
          OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You
          hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>
        <p>MISCELLANEOUS</p>
        <p>
          These Terms of Use and any policies or operating rules posted by us on
          the Site or in respect to the Site constitute the entire agreement and
          understanding between you and us. Our failure to exercise or enforce
          any right or provision of these Terms of Use shall not operate as a
          waiver of such right or provision. These Terms of Use operate to the
          fullest extent permissible by law. We may assign any or all of our
          rights and obligations to others at any time. We shall not be
          responsible or liable for any loss, damage, delay, or failure to act
          caused by any cause beyond our reasonable control. If any provision or
          part of a provision of these Terms of Use is determined to be
          unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Terms of Use and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Terms of
          Use or use of the Site. You agree that these Terms of Use will not be
          construed against us by virtue of having drafted them. You hereby
          waive any and all defenses you may have based on the electronic form
          of these Terms of Use and the lack of signing by the parties hereto to
          execute these Terms of Use.
        </p>
        <p>&nbsp;</p>
        <p>CONTACT US</p>
        <p>
          In order to resolve a complaint regarding the Site or to receive
          further information regarding use of the Site, please contact us at:
        </p>
        <p>nit.su.j.apparel@gmail.com</p>
      </div>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: null,
  },
];

<script>
	import TextBlock from '../TextBlock.svelte';
	import Header from '../Header.svelte';
	import Subheader from '../Subheader.svelte';
</script>

<Header> Empowering Your Journey in the Digital World </Header>
<Subheader> Discover the Power of the Right SaaS Solutions – Tailored for Your Success </Subheader>

<p class="p-6">
	At SaaS Select Ltd., we specialize in guiding businesses and individuals through the intricate maze of
	Software
	as a
	Service (SaaS) options. Our mission? To connect you with the perfect SaaS solutions that not only meet your
	unique
	needs but also propel your goals forward!
</p>

<TextBlock title="Why choose us?" icon="➡️" items="{[
			{	header: 'Expertise That Speaks Volumes', 
				text: `With years of experience in the SaaS industry, our team is equipped with the 
				knowledge and insights to recommend solutions that align with your objectives, budget, 
				and long-term vision.`},
			{	header: 'Personalized Consultation for Every Client',
				text: `We believe each client is unique. That's why our approach is always personalized. 
				We listen, understand, and then curate a SaaS strategy that’s just right for you.`},
			{	header: 'Ongoing Support and Mentorship',
				text: `Our relationship doesn’t end with a consultation. We offer continuous mentorship and support to ensure your chosen SaaS solutions deliver enduring value.`}]}" />

<TextBlock title="Our Services" icon="🤝" items="{[
			{	header: 'Comprehensive SaaS Vendor Selection',
				text: `Navigating the world of SaaS vendors can be overwhelming. We simplify this by helping you select vendors that offer the best fit for your specific needs.`},
			{	header: 'Implementation Guidance',
				text: `We stand by you throughout the implementation process, ensuring a smooth transition and integration of your new SaaS systems.`},
			{	header: 'Continuous SaaS Mentorship',
				text: `As your business grows, so will your SaaS needs. Our ongoing mentorship ensures you're always at the forefront of the SaaS landscape.`}]}" />

<TextBlock title="Getting Started" icon="🔰" items="{[
			{	header: 'Ready to Transform Your Business?',
				text: `Embarking on your SaaS journey is just a click away. <a href='mailto:saas-select@lamti.net' target='_blank'>Contact
				us</a> today for a consultation and let's chart a path to digital empowerment.`}]}" />



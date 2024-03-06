<script>
	import TextBlock from '$components/TextBlock.svelte';
	import ContactUs from '$components/ContactUs.svelte';
</script>

<code>/<a href="/courses">courses</a>/enterprise-level-password-management</code>

<TextBlock title="What you'll learn" icon="🔐" items="{[
			{	header: 'The importance of password management', 
				text: `This is just a primer - we presume you understand the value, since you're approaching us.`},
			{	header: 'Password Manager Landscape',
				text: `Just enough information to get you started on the right foot, making sure you don't get overwhelmed.`},
			{	header: 'Personalized, practical advice',
				text: `Here's where we apply the knowledge to your specific situation.`}]}"/>

<TextBlock title="Full money back policy" icon="🤝" items="{[
			{	header: `We're confident in our ability to help you`,
				text: `We offer full money-back guarantee if you're not satisfied with our service. The only thing we require in return, is that you explain to us how we missed your expectations, so that we can improve in the future.`}]}"/>

<TextBlock title="Transparent pricing" icon="💱" items="{[
			{	header: `£1000`,
				text: `We're confident in our ability to relay the crucial information and to design a strategy for you to follow within 2-4 hours.`},
]}"/>

<ContactUs/>

<script>
	import TextBlock from '$components/TextBlock.svelte';
	import ContactUs from '$components/ContactUs.svelte';
</script>

<code>/courses</code>

<TextBlock title="" icon="" items="{[
			{	header: `<a href='/courses/enterprise-level-password-management'>🔐 Enterprise Level Password Management</a>`, 
				text: `Get secured, equipped with a solid strategy, without getting overwhelmed.`},
			{	header: `<a href='/courses/adapting-to-ai/'>🤖 Adapting to AI</a>`,
				text: `Join the revolution, or get left behind.`}]}"/>

<TextBlock title="Full money back policy" icon="🤝" items="{[
			{	header: `We're confident in our ability to help you`,
				text: `We offer full money-back guarantee if you're not satisfied with our service. The only thing we require in return, is that you explain to us how we missed your expectations, so that we can improve in the future.`}]}"/>

<ContactUs/>
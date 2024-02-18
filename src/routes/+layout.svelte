<script>
	import '../app.css';
	import MenuItem from '../MenuItem.svelte';
	
</script>

<div class="content-center mx-auto bg-amber-50 rounded-xl shadow-lg flex space-x-4">
	<main>
		<div class="m-6 p-6 justify-center max-w-sm mx-auto bg-amber-100 rounded-xl shadow-lg flex space-x-4">
			<MenuItem href="/" text="🏡" title="Home - SaaS Select Ltd" />
			<MenuItem href="/courses" text="🧑🏼‍🏫" title="Courses" />
			<MenuItem href="/about" text="ℹ️" title="About us" />
			<MenuItem href="/contact" text="📲 📧 " title="Contact" />
		</div>

		<article class="content content-center px-4 mx-auto max-w-screen-md min-w-0.5 m-6">
			<slot></slot>
		</article>

		<div class="m-1 p-6 justify-center max-w-sm mx-auto bg-amber-100 rounded-xl shadow-lg flex space-x-4">
			Copyright ©️ 2024, SaaS Select Ltd.
			<hr />
			Registered in England and Wales.
			<hr />
			Company Number: 15402726
		</div>
	</main>
</div>
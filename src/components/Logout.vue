<script>
export default {
	mounted() {
        this.logout();
    },
    methods: {
    	logout() {
    		localStorage.removeItem('token');
    		location.href = "/";
    	}
    }
}
</script>
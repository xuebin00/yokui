<template>
	<div>
		<div class="button-list">
			<div class="item">
				<yok-button>默认</yok-button>&nbsp;
			</div>
			<div class="item">
				<yok-button
					type="primary"
				>主题色 primary
				</yok-button>
			</div>
			<div class="item">
				<yok-button
					type="success"
				>成功 success
				</yok-button>
			</div>
			<div class="item">
				<yok-button
					type="warning"
				>警告 warning
				</yok-button>
			</div>
			<div class="item">
				<yok-button
					type="danger"
				>危险 danger
				</yok-button>
			</div>
			<div class="item">
				<yok-button
					type="primary"
					:disabled="true"
				>disabled
				</yok-button>
			</div>
			<div class="item">
				<yok-button
					type="primary"
					:loading="true"
				>loading
				</yok-button>
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
	name: 'button'
}
</script>
<style lang="less">
	.button{
		&-list{
			.item{
				margin-bottom: 5px;
				button{
					width: 100%;
				}
			}
		}	
	}
</style>
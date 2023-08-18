function getSize(bytesLen) {
	let unitCount = 0;
	let units = ['Bytes', 'KB', 'MB', 'GB'];
	while (bytesLen > 1024) {
		bytesLen /= 1024;
		unitCount++;
	}
	return bytesLen.toFixed(2) + units[unitCount];
}
//github API地址: api.github.com 镜像地址: 444.lytv.gq   g-api.nite07.org
(async () => {
	let res1, res2, res3;
	try {
		res1 = (
			await axios.get('https://444.lytv.gq/repos/fongmi/release/contents/apk/release')
		).data.filter(
			(item) =>
				item.name.endsWith('.apk') &&
				item.name !== 'mobile-java.apk' &&
				item.name !== 'mobile-python.apk' &&
				item.name !== 'leanback-java.apk' &&
				item.name !== 'leanback-python.apk'
		);
		// 添加部分：遍历res1，修改部分文件名并给出下载链接
	res1.forEach((item) => {
		if (item.name === 'mobile-python-arm64_v8a.apk') {
      item.newName = '手机正式版python-64.apk';
		} else if (item.name === 'mobile-java-arm64_v8a.apk') {
      item.newName = '手机正式版java-64.apk';
        } else if (item.name === 'mobile-python-armeabi_v7a.apk') {
      item.newName = '手机正式版python-32.apk';
        } else if (item.name === 'mobile-java-armeabi_v7a.apk') {
      item.newName = '手机正式版java-32.apk';
        } else if (item.name === 'leanback-python-arm64_v8a.apk') {
      item.newName = '5.1+TV正式版python-64.apk';
        } else if (item.name === 'leanback-java-arm64_v8a.apk') {
      item.newName = '5.1+TV正式版java-64.apk';
        } else if (item.name === 'leanback-python-armeabi_v7a.apk') {
      item.newName = '5.1+TV正式版python-32.apk';
        } else if (item.name === 'leanback-java-armeabi_v7a.apk') {
      item.newName = '5.1+TV正式版java-32.apk';
		}
	});
	   res2 = (
			await axios.get('https://444.lytv.gq/repos/fongmi/release/contents/apk/dev')
		).data.filter(
			(item) =>
				item.name.endsWith('.apk') &&
				item.name !== 'mobile-java.apk' &&
				item.name !== 'mobile-python.apk' &&
				item.name !== 'leanback-java.apk' &&
				item.name !== 'leanback-python.apk'
		);
		// 添加部分：遍历res2，修改部分文件名并给出下载链接
	res2.forEach((item) => {
		if (item.name === 'mobile-python-arm64_v8a.apk') {
      item.newName = '手机内测版python-64.apk';
		} else if (item.name === 'mobile-java-arm64_v8a.apk') {
      item.newName = '手机内测版java-64.apk';
        } else if (item.name === 'mobile-python-armeabi_v7a.apk') {
      item.newName = '手机内测版python-32.apk';
        } else if (item.name === 'mobile-java-armeabi_v7a.apk') {
      item.newName = '手机内测版java-32.apk';
        } else if (item.name === 'leanback-python-arm64_v8a.apk') {
      item.newName = '5.1+TV内测版python-64.apk';
        } else if (item.name === 'leanback-java-arm64_v8a.apk') {
      item.newName = '5.1+TV内测版java-64.apk';
        } else if (item.name === 'leanback-python-armeabi_v7a.apk') {
      item.newName = '5.1+TV内测版python-32.apk';
        } else if (item.name === 'leanback-java-armeabi_v7a.apk') {
      item.newName = '5.1+TV内测版java-32.apk';
		}
	});
	
		res3 = (
			await axios.get(
				'https://444.lytv.gq/repos/fongmi/release/contents/apk/kitkat')
		).data.filter(
			(item) =>
				item.name.endsWith('.apk')
         );
         
         // 添加部分：遍历res3，修改部分文件名并给出下载链接
	res3.forEach((item) => {
		if (item.name === 'leanback.apk') {
      item.newName = '4.1-4.4TV版.apk';
		} else {
		  item.newName = item.name;
        }
    });				
         
	} catch (err) {
		Swal.fire({
			icon: 'error',
			title: '下载资源请求失败',
			showConfirmButton: false,
			timer: 1000,
		});
	}
	let res = res1.concat(res2,res3);
	let downloadList = document.querySelector('#download ul');
	res.forEach((item) => {
		let liItem = `<li
        class="rounded-lg pl-2 pt-1 hover:bg-gray-200 mb-3 pb-1 border-b text-blue-400 hover:text-blue-800 transition-all duration-100 grid grid-cols-4">
        <a class="col-span-2" href="https://ghproxy.com/${item.download_url}">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
            </svg>
                ${item.newName ? item.newName : item.name}
            </span>
        </a>
        <span class="mr-10">${getSize(item.size)}</span>
        <span>
            <a class="col-span-3" href="${item.download_url}" download>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
            </svg>
            </a>
        </span>
        </li>`;
		downloadList.innerHTML += liItem;
	});
})();
const site_root = "/ysyx";

var Schedule = undefined,
	hash     = date_time();

Array.from(document.getElementsByTagName("module")).forEach(module => {
	switch (module.id){
		case "_message":
			load_css("message", "/ysyx/modules");
			fetch(`${site_root}/modules/message.json?${hash}`)
				.then(response => response.json())
				.then(data     => {
					module.innerHTML = data.map(message => {
						// compose individual message entry
						var shortcuts = Object.keys(message.shortcut).map(key => {
							return `&nbsp;&nbsp;<a href="${message.shortcut[key]}" style="color: white;">${key}</a>`
						});
						return `
						<div class="banner" style="background-color: ${message.color};">
							<span class="contentWrapper">
								${message.content}
								${shortcuts}
							</span>
						</div>
						`.trim()
					}).join('\n');
				})
			break;
		case "_recent_schedule":
			if (Schedule === undefined){
				fetch(`${site_root}/Schedule.json?${hash}`)
					.then(response => response.json())
					.then(data => {
						Schedule = data;
						_recent_schedule(module);
					})
			}
			else _recent_schedule(module);
			function _recent_schedule(module){
				var N = 3,
					recent_events = Object.keys(Schedule).sort(compare_date);	
				while (recent_events.length > 0 && compare_date(today(), recent_events[0]) > 0) recent_events = recent_events.splice(1);
				while (recent_events.length > N + 1 && compare_date(recent_events[N - 1], recent_events[N]) == 0) N++;
				recent_events = recent_events.splice(0, N);
				module.innerHTML = recent_events.map(key => {
					var event = Schedule[key],
						links = [
							event.Detail_Page &&
							`<a class="button plain" href="/ysyx/lectures/${key}/">了解详情</a>` || '',
							event.LiveMeeting.URL.trim() &&
							`<a class="button enter_meeting" href="${event.LiveMeeting.URL.trim}" target="_blank">进入会议</a>` || ''
						].join(''),
						badge = compare_date(today(), key) == 0 && ` <sup class="badge">Today</sup>` || '',
						date = key.split("_")[0].split("-").map(d => parseInt(d));
					return `
					<span class="event_entry">
						<span style="font-size: 1.6em; width: 4.5em; border-right: 3px solid gray;  font-weight: 200;">${date[1]}月${date[2]}日</span>
						<span class="content">
							<span style="font-size: 1.6em; color: #666; font-weight: 400;">[${event.Tag}] <b>${event.Topic}</b>${badge}</span>
							<span style="display: flex; flex-direction: column; text-align: left; margin-left: 1em; font-size: 0.8em;">
								<div class="event_subtitle">负责人: ${event.Host.join(', ')}</div>
								<div class="event_subtitle">${date[0]}年${date[1]}月${date[2]}日 ${event.Time_Start} CST</div>
							</span>
							<span style="display: flex; flex-grow: 1; flex-direction: row; justify-content: right;">
								${links}
							</span>
						</span>
					</span>
					`.trim()
				}).join('\n');
			}
			break;
		case "_footer":
			fetch(`${site_root}/modules/footer.html`)
				.then(response => response.text())
				.then(html => {
					module.innerHTML = html;
				});
			break;
		default:
			console.exception(`Unrecognized module: ${module.id}`);
	}
});

function load_css(name, path){
	if (!document.getElementById(name)){
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = name;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = `${path}/${name}.css`;
		link.media = 'all';
		head.appendChild(link);
	}
}

function compare_date(entry_A, entry_B){
	parse = str => str.split("_")[0].split("-").map(d => parseInt(d));
	join  = arr => arr[0] * 10000 + arr[1] * 100 + arr[2];
	var A = join(parse(entry_A)),
		B = join(parse(entry_B));
	if (A > B) return  1;
	if (A < B) return -1;
	return 0;
}

function today() {
	var date = new Date,
		mm = date.getMonth() + 1, // getMonth() is zero-based
		dd = date.getDate();
	return [date.getFullYear(),
			(mm>9 ? '' : '0') + mm,
			(dd>9 ? '' : '0') + dd
			].join('-');
};

function date_time(){
	var d = new Date;
    return [d.getFullYear(),
			d.getMonth()+1,
            d.getDate(),
			d.getHours(),
            d.getMinutes()
		   ].join('');
}
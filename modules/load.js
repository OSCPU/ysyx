/*  
 *  Author: Yuxuan
 *  Project: OSCPU/ysyx Website
 *  ------------------------------------------------
 *  This is the module assembler for webpages across
 *  the site.
 *  Since we are currently using github pages, we do
 *  not have the option of server-side rendering.
 *  In Order to share common parts across the site,
 *  we have to fetch the information required by ea-
 *  ch modules, and render it at the front end.
 *  This is definitely not an elegant approach, but
 *  it serves out purpose well.
 */

var Schedule = undefined,
	hash     = date_time(),
	PWD      = location.pathname
				.replace(/^\/(ysyx\/)?/g,'')
				.split('/')
				.map(s => s.toLowerCase()),
	EID		= search_key('EID'),
	Module = {};

Module.message = module => {
	load_css("message", "/ysyx/modules");
	fetch(`/ysyx/modules/message.json?${hash}`)
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
							${shortcuts.join(' ')}
						</span>
					</div>
				`.trim()
			}).join('\n');
		})
}

Module.recent_schedule = module => {
	load_css('event_list', '/ysyx/modules');
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
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
		module.innerHTML = recent_events.map(key => render_event(key, Schedule[key])).join('\n');
	}
}

Module.event_list_completed = module => {
	load_css('event_list', '/ysyx/modules');
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
			.then(response => response.json())
			.then(data => {
				Schedule = data;
				_event_list_completed(module);
			})
	}
	else _event_list_completed(module);
	function _event_list_completed(module){
		var recent_events = Object.keys(Schedule).sort(compare_date).reverse();
		while (recent_events.length > 0 && compare_date(today(), recent_events[0]) <= 0) recent_events = recent_events.splice(1);
		recent_events = recent_events.reverse();
		module.innerHTML = recent_events.map(key => render_event(key, Schedule[key])).join('\n');
	}
}

Module.event_list_planned = module => {
	load_css('event_list', '/ysyx/modules');
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
			.then(response => response.json())
			.then(data => {
				Schedule = data;
				_event_list_planned(module);
			})
	}
	else _event_list_planned(module);
	function _event_list_planned(module){
		var recent_events = Object.keys(Schedule).sort(compare_date);
		while (recent_events.length > 0 && compare_date(today(), recent_events[0]) > 0) recent_events = recent_events.splice(1);
		module.innerHTML = recent_events.map(key => render_event(key, Schedule[key])).join('\n');
	}
}

Module.event_list_navi = module => {
	// load_css('event_list', '/ysyx/modules');
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
			.then(response => response.json())
			.then(data => {
				Schedule = data;
				_event_info_cards(module);
			})
	}
	else _event_info_cards(module);
	function _event_info_cards(module){
		var recent_events = Object.keys(Schedule).sort(compare_date);
		module.innerHTML = recent_events.map(key => {
			var navi_current = (EID == key) && 'class="current"' || '';
			return `<a href="/ysyx/events/events.html?EID=${key}" ${navi_current}>${Schedule[key].Topic}</a>`}
		).join('\n');
	}
}

Module.event_info_cards = module => {
	// load_css('event_list', '/ysyx/modules');
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
			.then(response => response.json())
			.then(data => {
				Schedule = data;
				_event_info_cards(module);
			})
	}
	else _event_info_cards(module);
	function _event_info_cards(module){
		if (EID in Schedule){
			module.innerHTML = render_portal_card(EID, Schedule[EID]) + render_download_cards(EID, Schedule[EID]);
		}
	}
}

Module.event_info_article = module => {
	if (Schedule === undefined){
		fetch(`/ysyx/Schedule.json?${hash}`)
		.then(response => response.json())
		.then(data => {
			Schedule = data;
			_event_info_article(module);
		})
	}
	else _event_info_article(module);
	function _event_info_article(module){
		if (EID in Schedule){
			var event = Schedule[EID];
			// Change page title
			document.title = `[一生一芯]${event.Type}:${event.Topic}`;
			// Main Logic		
			module.innerHTML = `
			<h2>[${event.Type}] ${event.Topic}</h2>
			<p>负责人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${event.Host.join(' ')}</p>
			<p>开始时间&nbsp;&nbsp;${formate_date_time(EID, event.Time_Start)}</p>
			`
		}
	}
}

Module.header = module => {
	load_css('header', '/ysyx/modules');
	var dir = {
			index : PWD.length == 1 && (PWD[0] === "" || PWD[0] === "index.html"),
			wiki  : PWD[0] === "wiki",
			events: PWD[0] === "events",
			posts : PWD[0] === "posts",
			prog  : PWD[0] === "progress"
		};
		module.innerHTML = `
			<div class="contentWrapper header">
					<a class="link${dir.index &&'_current'||''}" ${dir.index &&''||'href="/ysyx/"'} style="font-weight: 500;"><i class="codicon codicon-home"></i>一生一芯计划</a>
				<span flex>
					<a class="link${dir.wiki  &&'_current'||''}" ${dir.wiki  &&''||'href="/ysyx/wiki/"'}>WIKI</a>
					<a class="link${dir.prog  &&'_current'||''}" ${dir.prog  &&''||'href="https://docs.qq.com/sheet/DZG1NVExCWXpMaER6"'} target="_blank">学习记录<i class="codicon codicon-link-external"></i></a>
					<a class="link${dir.events&&'_current'||''}" ${dir.events&&''||'href="/ysyx/events/"'}>活动列表</a>
					<a class="link${dir.posts &&'_current'||''}" ${dir.posts &&''||'href="/ysyx/posts/"'}>通知&公告</a>
				</span>
			</div>
		`.trim();
}

Module.footer = module => {
	fetch(`/ysyx/modules/footer.html`)
		.then(response => response.text())
		.then(html => {
			module.innerHTML = html;
		});
}

function render_event(key, event){
	var links = [
			`<a class="button plain" href="/ysyx/events/events.html?EID=${key}">了解详情</a>` || '',
			event.PlayBack.URL.trim() &&
			`<a class="button view_playback" href="${event.PlayBack.URL.trim()}" target="_blank">观看回放</a>` ||
			Array.isArray(event.LiveMeeting) &&
			`<a class="button enter_meeting" href="/ysyx/events/events.html?EID=${key}">查看分组</a>` ||
			event.LiveMeeting.URL.trim() &&
			`<a class="button enter_meeting" href="${event.LiveMeeting.URL.trim()}" target="_blank">进入会议</a>` || ''
		].join(''),
		badge = compare_date(today(), key) == 0 && ` <sup class="badge">Today</sup>` || '',
		date  = key.split("_")[0].split("-").map(d => parseInt(d));
	return `
		<span class="event_entry">
			<span style="font-size: 1.6em; width: 4.5em; border-right: 3px solid gray;  font-weight: 200;">${date[1]}月${date[2]}日</span>
			<span class="content">
				<span style="font-size: 1.6em; color: #666; font-weight: 400;">[${event.Type}] <b>${event.Topic}</b>${badge}</span>
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
}

function render_portal_card(key, event){
	var brand, data;
	theme = {
		tencent_meeting:{
			ID_Title: "Meeting ID",
			Button  : "加入会议",
			Accent  : "#006fff",
			Logo    : "https://meeting.tencent.com/static/imgs/header/header_logo_2x.png"
		},
		bilibili:{
			ID_Title: "BV",
			Button  : "观看回放",
			Accent  : "#ff5c7c",
			Logo    : "/ysyx/res/logo/Bilibili_pink.png"
		},
	}
	if  (event.PlayBack.URL != ""){
		brand = 'bilibili';
		data  = [event.PlayBack];
	}
	else if ((Array.isArray(event.LiveMeeting) && event.LiveMeeting.length) || event.LiveMeeting.URL != ""){
		brand = 'tencent_meeting';
		data  =  Array.isArray(event.LiveMeeting)
				 &&  event.LiveMeeting
				 || [event.LiveMeeting];
	}
	else
		return `
		<span style="; font-size: 0.8em; display: block; background-color: hsl(0, 0%, 97%); text-align: center; border-radius: 6px; overflow: hidden; width: 20em; padding-bottom: 1em;">
			<div style="box-sizing: border-box; color: hsl(0, 0%, 20%); background-color: hsl(0, 0%, 90%); width: 100%; padding: 0.5em 1.2em;">
				<span style="font-size: 1em; font-weight: bold;">暂无会议/回放信息</span>
			</div>
			<div></div>
			<p>${formate_date_time(key, event.Time_Start)}</p>
			<p>Event ID <span style="display: inline-block; padding: 0.1em 0.4em; border-radius: 0.3em; background-color: #0001; color: #666; font-weight: bold;">Unavailable</span></p>
			<a style="display: inline-block; background-color: #888; border-radius: 3px; color: white; padding: 0.5em 1em; text-decoration: none; user-select: none; pointer-events: none;">不可用</a>
		</span>
		`
	return data.map(e => `
	<div style="text-align: left; padding: 0;">
		<span style=" font-size: 0.8em; display: inline-block; padding-bottom: 1em; background-color: hsl(0, 0%, 97%); text-align: center; border-radius: 4px; overflow: hidden; width: 100%;">
			<div style="box-sizing: border-box; color: hsl(0, 0%, 20%); background-color: hsl(0, 0%, 90%); width: 100%; padding: 0.5em 1.2em;">
				<span style="font-size: 1em; font-weight: bold;">${e.Title}</span>
			</div>
			<div></div>
			<p>${formate_date_time(key, event.Time_Start)}</p>
			<p>${theme[brand].ID_Title} <span style="display: inline-block; padding: 0.1em 0.4em; border-radius: 0.3em; background-color: #0001; color: #666; font-weight: bold;">${e.ID}</span></p>
			<a style="display: inline-block; background-color: ${theme[brand].Accent}; border-radius: 3px; color: white; padding: 0.5em 1em; text-decoration: none; user-select: none;" href="${e.URL}" target="_blank">${theme[brand].Button}</a>
			<p style="line-height: 160%; color: #666; font-size: 0.8em;">
				<u>${e.URL}</u>
			</p>
			<img src="${theme[brand].Logo}" alt="Logo" style="display: inline-block; height: 1.2em; width: auto; max-width: 12em;">
		</span>
	</div>
	`.trim()).join('\n');
}

function render_download_cards(key, event){
	if ("shared_files" in event)
		return event.shared_files.map(file_name =>`
		<a style="background-color: #dfdfdf;" href="/ysyx/events/${key}/${file_name}" download>
			<i class='codicon codicon-cloud-download'></i>
			<div style="text-align: left">${UI_Safe(file_name)}</div>
		</a>
		`.trim()).join('\n')
	return ''
}

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

function formate_date_time(key, time){
	var date = key.split('_')[0].split('-').map(n => parseInt(n));
	return `${date[0]} 年 ${date[1]} 月 ${date[2]} 日 ${time} CST`;
}

function search_key(key){
	var res = undefined;
	location.search.slice(1).split('&').forEach(e => {
		if (e.split('=')[0] == key && e.split('=').length > 1)
		res = e.split('=').splice(1).join('');
	})
	return res;
}

Array.from(document.getElementsByTagName("module")).forEach(module => {
	var role = module.getAttribute('role');
	if (role in Module){
		try {
			Module[role](module);
		} catch (error) {
			console.exception(error);
		}
	}
	else
		console.exception(`Unrecognized module "${role}"`);
});

function UI_Safe(str){
	return str.replace(/\&/g, '&amp;')
			  .replace(/\</g, '&lt;')
			  .replace(/\>/g, '&gt;')
			  .replace(/\"/g, '&quot;')
			  .replace(/\'/g, '&apos;')
}
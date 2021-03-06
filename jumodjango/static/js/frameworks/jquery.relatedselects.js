/*
 * jQuery Related Selects plug-in 1.0
 *
 * http://www.erichynds.com/jquery/jquery-related-dependent-selects-plugin/
 * http://github.com/ehynds/jquery-related-selects
 *
 * Copyright (c) 2009 Eric Hynds
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(d){d.fn.relatedSelects=function(j){j=d.extend({},d.fn.relatedSelects.defaults,j);return this.each(function(){new q(this,j)})};var q=function(j,h){function r(){for(var b,a,c=1,f=g.length;c<f;c++){b=k.find("select[name='"+g[c]+"']");a=b.find("option[value='']").text();b.data("defaultOption",a)}}function m(b,a,c,f){if(a.length){var e=d.trim(b.val());if(e.length>0&&e!==f.loadingMessage&&a){n(c);s(b,a,f)}else a&&n(c)}}function s(b,a,c){var f=[],e=[];e=0;for(var t=g.length;e<t;e++)f.push('select[name="'+ g[e]+'"]');e=d(f.join(","),k).serialize();a.attr("disabled","disabled").html('<option value="">'+c.loadingMessage+"</option>");d.ajax({beforeSend:function(){c.onLoadingStart.call(a)},complete:function(){c.onLoadingEnd.call(a)},dataType:c.dataType,data:e,url:c.onChangeLoad,success:function(l){var i=[],o=a.data("defaultOption");o.length>0&&i.push('<option value="" selected="selected">'+o+"</option>");if(c.dataType==="json"&&typeof l==="object"&&l){d.each(l,function(u,v){i.push('<option value="'+u+'">'+ v+"</option>")});a.html(i.join("")).removeAttr("disabled")}else if(c.dataType==="html"&&d.trim(l).length>0){i.push(d.trim(l));a.html(i.join("")).removeAttr("disabled")}else{a.html(i.join(""));c.disableIfEmpty||a.removeAttr("disabled");c.onEmptyResult.call(b)}}})}function w(b){b=b.find("option");return b.length===0||b.length===1&&b.filter(":first").attr("value").length===0?false:true}function n(b){b=p(b)+1;for(var a=g.length;b<a;b++)d("select[name='"+g[b]+"']",k).attr("disabled","disabled").find("option:first").attr("selected", "selected")}function x(b){return k.find("select[name='"+g[p(b)+1]+"']")}function p(b){for(var a=0,c=g.length;a<c;a++)if(g[a]===b)return a}function y(){var b=h.selects;h.selects={};for(var a=0,c=b.length;a<c;a++)h.selects[b[a]]={}}var k=d(j),g=[];d.isArray(h.selects)&&y();for(var z in h.selects)g.push(z);r();d.each(h.selects,function(b,a){var c=k.find("select[name='"+b+"']"),f=x(b),e=c.val();a=d.extend({defaultOptionText:h.defaultOptionText||c.data("defaultOption")},h,a);c.data("defaultOption",a.defaultOptionText); c.change(function(){a.onChange.call(c);m(c,f,b,a)});e&&e.length>0&&w(f)||m(c,f,b,a)})};d.fn.relatedSelects.defaults={selects:{},loadingMessage:"Loading, please wait...",disableIfEmpty:false,dataType:"json",onChangeLoad:"",onLoadingStart:function(){},onLoadingEnd:function(){},onChange:function(){},onEmptyResult:function(){}}})(jQuery);


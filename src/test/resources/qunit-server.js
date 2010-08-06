
  
  

  


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>qunit.js at master from davejohnson's qunit-server - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="http://github.com/fluidicon.png" title="GitHub" />

    <link href="http://assets3.github.com/stylesheets/bundle_common.css?73072a7777cbe88ed1e0d014485753f864b02c5e" media="screen" rel="stylesheet" type="text/css" />
<link href="http://assets2.github.com/stylesheets/bundle_github.css?73072a7777cbe88ed1e0d014485753f864b02c5e" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = null
      
    </script>
    <script src="http://assets1.github.com/javascripts/jquery/jquery-1.4.2.min.js?73072a7777cbe88ed1e0d014485753f864b02c5e" type="text/javascript"></script>
    <script src="http://assets1.github.com/javascripts/bundle_common.js?73072a7777cbe88ed1e0d014485753f864b02c5e" type="text/javascript"></script>
<script src="http://assets2.github.com/javascripts/bundle_github.js?73072a7777cbe88ed1e0d014485753f864b02c5e" type="text/javascript"></script>

        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "davejohnson/qunit-server"
      })
    </script>

    
  
    
  

  <link href="http://github.com/davejohnson/qunit-server/commits/master.atom" rel="alternate" title="Recent Commits to qunit-server:master" type="application/atom+xml" />

        <meta name="description" content="This is a version of QUnit that submits the results of the test to JSUnit server in the JSUnit server format." />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "davejohnson/qunit-server";
      GitHub.currentRef = 'master';
    </script>
  

            <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

  </head>

  

  <body>
    

    
      <script type="text/javascript">
        var _kmq = _kmq || [];
        function _kms(u){
          var s = document.createElement('script'); var f = document.getElementsByTagName('script')[0]; s.type = 'text/javascript'; s.async = true;
          s.src = u; f.parentNode.insertBefore(s, f);
        }
        _kms('//i.kissmetrics.com/i.js');_kms('//doug1izaerwt3.cloudfront.net/406e8bf3a2b8846ead55afb3cfaf6664523e3a54.1.js');
      </script>
    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="pageheaded">
        <div class="site">
          <div class="logo">
            <a href="http://github.com"><img src="/images/modules/header/logov3.png" alt="github" /></a>
          </div>
          
          <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <input type="search" class="search my_repos_autocompleter" name="q" results="5" placeholder="Search&hellip;" /> <input type="submit" value="Search" class="button" />
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
  
  
    <ul class="nav logged_out">
      
        <li><a href="http://github.com">Home</a></li>
        <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
        <li><a href="http://github.com/explore">Explore GitHub</a></li>
        
        <li><a href="/blog">Blog</a></li>
      
      <li><a href="https://github.com/login">Login</a></li>
    </ul>
  
</div>

        </div>
      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public   ">
        <h1>
          <a href="/davejohnson">davejohnson</a> / <strong><a href="http://github.com/davejohnson/qunit-server">qunit-server</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/davejohnson/qunit-server/edit" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/davejohnson/qunit-server/toggle_watch" class="minibutton btn-watch " id="watch_button" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/davejohnson/qunit-server/toggle_watch" class="minibutton btn-watch " id="unwatch_button" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/davejohnson/qunit-server/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '6a45f7bdc99c2da38790cbc8325d3131e29cabe6'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
          <li id="pull_request_item" class='ospr' style="display:none"><a href="/davejohnson/qunit-server/pull_request/" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
          

          <li><a href="#" class="minibutton btn-download " id="download_button"><span><span class="icon"></span>Download Source</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/davejohnson/qunit-server/watchers" title="Watchers" class="tooltipped downwards">2</a></li>
          <li class="forks"><a href="/davejohnson/qunit-server/network" title="Forks" class="tooltipped downwards">1</a></li>
        </ul>
      </li>
    </ul>


        
  <ul class="tabs">
    <li><a href="http://github.com/davejohnson/qunit-server/tree/master" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="http://github.com/davejohnson/qunit-server/commits/master" highlight="repo_commits">Commits</a></li>

    
    <li><a href="/davejohnson/qunit-server/network" highlight="repo_network">Network (1)</a></li>

    

    
      
      <li><a href="/davejohnson/qunit-server/issues" highlight="issues">Issues (0)</a></li>
    

    
      
      <li><a href="/davejohnson/qunit-server/downloads">Downloads (0)</a></li>
    

          
      <li><a href="http://wiki.github.com/davejohnson/qunit-server/">Wiki (1)</a></li>
    
    <li><a href="/davejohnson/qunit-server/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/davejohnson/qunit-server/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

      

      <div id="repository_description" rel="repository_description_edit">
        
          <p>This is a version of QUnit that submits the results of the test to JSUnit server in the JSUnit server format.
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>
      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/davejohnson/qunit-server/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="6a45f7bdc99c2da38790cbc8325d3131e29cabe6" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="This is a version of QUnit that submits the results of the test to JSUnit server in the JSUnit server format.">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://nullisnotanobject.com" rel="nofollow">http://nullisnotanobject.com</a></p>
      </div>
      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/davejohnson/qunit-server/edit/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="6a45f7bdc99c2da38790cbc8325d3131e29cabe6" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://nullisnotanobject.com">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      <div class="rule "></div>

            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="http://github.com/davejohnson/qunit-server.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/davejohnson/qunit-server.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="http://assets0.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="http://assets0.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      









<script type="text/javascript">
  GitHub.currentCommitRef = 'master'
  GitHub.currentRepoOwner = 'davejohnson'
  GitHub.currentRepo = "qunit-server"
  GitHub.downloadRepo = '/davejohnson/qunit-server/archives/master'

  

  
</script>










  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/davejohnson/qunit-server/commit/57a29235d197655c5e4e5987254b82b3d7b174db">module name was not being set</a> </pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="http://www.gravatar.com/avatar/23f957b0cfed92ad1bb645e071cc7f3c?s=140&d=http%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/davejohnson">davejohnson</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2010-03-11 13:44:09">Thu Mar 11 13:44:09 -0800 2010</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/davejohnson/qunit-server/commit/57a29235d197655c5e4e5987254b82b3d7b174db" hotkey="c">57a29235d197655c5e4e</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/davejohnson/qunit-server/tree/57a29235d197655c5e4e5987254b82b3d7b174db" hotkey="t">053e135492bba5e2ab48</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/davejohnson/qunit-server/tree/93fc83e9b6299d05e1a703e1fd30f5e21b0193aa" hotkey="p">93fc83e9b6299d05e1a7</a>
      

    </div>
  </div>

    </div>
  </div>



  
    <div id="path">
      <b><a href="/davejohnson/qunit-server/tree/57a29235d197655c5e4e5987254b82b3d7b174db">qunit-server</a></b> / qunit.js       <span style="display:none" id="clippy_3009">qunit.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="http://assets2.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_3009&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="http://assets2.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_3009&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div id="files">
      <div class="file">
        <div class="meta">
          <div class="info">
            <span class="icon"><img alt="Txt" height="16" src="http://assets3.github.com/images/icons/txt.png?eeac953042759db20d64c26ef4541fd6177ca29b" width="16" /></span>
            <span class="mode" title="File Mode">100644</span>
            
              <span>1139 lines (956 sloc)</span>
            
            <span>30.716 kb</span>
          </div>
          <ul class="actions">
            
              <li><a id="file-edit-link" href="#" rel="/davejohnson/qunit-server/file-edit/__ref__/qunit.js">edit</a></li>
            
            <li><a href="/davejohnson/qunit-server/raw/57a29235d197655c5e4e5987254b82b3d7b174db/qunit.js" id="raw-url">raw</a></li>
            
              <li><a href="/davejohnson/qunit-server/blame/57a29235d197655c5e4e5987254b82b3d7b174db/qunit.js">blame</a></li>
            
            <li><a href="/davejohnson/qunit-server/commits/master/qunit.js">history</a></li>
          </ul>
        </div>
        
  <div class="data syntax type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="LID1" rel="#L1">1</span>
<span id="LID2" rel="#L2">2</span>
<span id="LID3" rel="#L3">3</span>
<span id="LID4" rel="#L4">4</span>
<span id="LID5" rel="#L5">5</span>
<span id="LID6" rel="#L6">6</span>
<span id="LID7" rel="#L7">7</span>
<span id="LID8" rel="#L8">8</span>
<span id="LID9" rel="#L9">9</span>
<span id="LID10" rel="#L10">10</span>
<span id="LID11" rel="#L11">11</span>
<span id="LID12" rel="#L12">12</span>
<span id="LID13" rel="#L13">13</span>
<span id="LID14" rel="#L14">14</span>
<span id="LID15" rel="#L15">15</span>
<span id="LID16" rel="#L16">16</span>
<span id="LID17" rel="#L17">17</span>
<span id="LID18" rel="#L18">18</span>
<span id="LID19" rel="#L19">19</span>
<span id="LID20" rel="#L20">20</span>
<span id="LID21" rel="#L21">21</span>
<span id="LID22" rel="#L22">22</span>
<span id="LID23" rel="#L23">23</span>
<span id="LID24" rel="#L24">24</span>
<span id="LID25" rel="#L25">25</span>
<span id="LID26" rel="#L26">26</span>
<span id="LID27" rel="#L27">27</span>
<span id="LID28" rel="#L28">28</span>
<span id="LID29" rel="#L29">29</span>
<span id="LID30" rel="#L30">30</span>
<span id="LID31" rel="#L31">31</span>
<span id="LID32" rel="#L32">32</span>
<span id="LID33" rel="#L33">33</span>
<span id="LID34" rel="#L34">34</span>
<span id="LID35" rel="#L35">35</span>
<span id="LID36" rel="#L36">36</span>
<span id="LID37" rel="#L37">37</span>
<span id="LID38" rel="#L38">38</span>
<span id="LID39" rel="#L39">39</span>
<span id="LID40" rel="#L40">40</span>
<span id="LID41" rel="#L41">41</span>
<span id="LID42" rel="#L42">42</span>
<span id="LID43" rel="#L43">43</span>
<span id="LID44" rel="#L44">44</span>
<span id="LID45" rel="#L45">45</span>
<span id="LID46" rel="#L46">46</span>
<span id="LID47" rel="#L47">47</span>
<span id="LID48" rel="#L48">48</span>
<span id="LID49" rel="#L49">49</span>
<span id="LID50" rel="#L50">50</span>
<span id="LID51" rel="#L51">51</span>
<span id="LID52" rel="#L52">52</span>
<span id="LID53" rel="#L53">53</span>
<span id="LID54" rel="#L54">54</span>
<span id="LID55" rel="#L55">55</span>
<span id="LID56" rel="#L56">56</span>
<span id="LID57" rel="#L57">57</span>
<span id="LID58" rel="#L58">58</span>
<span id="LID59" rel="#L59">59</span>
<span id="LID60" rel="#L60">60</span>
<span id="LID61" rel="#L61">61</span>
<span id="LID62" rel="#L62">62</span>
<span id="LID63" rel="#L63">63</span>
<span id="LID64" rel="#L64">64</span>
<span id="LID65" rel="#L65">65</span>
<span id="LID66" rel="#L66">66</span>
<span id="LID67" rel="#L67">67</span>
<span id="LID68" rel="#L68">68</span>
<span id="LID69" rel="#L69">69</span>
<span id="LID70" rel="#L70">70</span>
<span id="LID71" rel="#L71">71</span>
<span id="LID72" rel="#L72">72</span>
<span id="LID73" rel="#L73">73</span>
<span id="LID74" rel="#L74">74</span>
<span id="LID75" rel="#L75">75</span>
<span id="LID76" rel="#L76">76</span>
<span id="LID77" rel="#L77">77</span>
<span id="LID78" rel="#L78">78</span>
<span id="LID79" rel="#L79">79</span>
<span id="LID80" rel="#L80">80</span>
<span id="LID81" rel="#L81">81</span>
<span id="LID82" rel="#L82">82</span>
<span id="LID83" rel="#L83">83</span>
<span id="LID84" rel="#L84">84</span>
<span id="LID85" rel="#L85">85</span>
<span id="LID86" rel="#L86">86</span>
<span id="LID87" rel="#L87">87</span>
<span id="LID88" rel="#L88">88</span>
<span id="LID89" rel="#L89">89</span>
<span id="LID90" rel="#L90">90</span>
<span id="LID91" rel="#L91">91</span>
<span id="LID92" rel="#L92">92</span>
<span id="LID93" rel="#L93">93</span>
<span id="LID94" rel="#L94">94</span>
<span id="LID95" rel="#L95">95</span>
<span id="LID96" rel="#L96">96</span>
<span id="LID97" rel="#L97">97</span>
<span id="LID98" rel="#L98">98</span>
<span id="LID99" rel="#L99">99</span>
<span id="LID100" rel="#L100">100</span>
<span id="LID101" rel="#L101">101</span>
<span id="LID102" rel="#L102">102</span>
<span id="LID103" rel="#L103">103</span>
<span id="LID104" rel="#L104">104</span>
<span id="LID105" rel="#L105">105</span>
<span id="LID106" rel="#L106">106</span>
<span id="LID107" rel="#L107">107</span>
<span id="LID108" rel="#L108">108</span>
<span id="LID109" rel="#L109">109</span>
<span id="LID110" rel="#L110">110</span>
<span id="LID111" rel="#L111">111</span>
<span id="LID112" rel="#L112">112</span>
<span id="LID113" rel="#L113">113</span>
<span id="LID114" rel="#L114">114</span>
<span id="LID115" rel="#L115">115</span>
<span id="LID116" rel="#L116">116</span>
<span id="LID117" rel="#L117">117</span>
<span id="LID118" rel="#L118">118</span>
<span id="LID119" rel="#L119">119</span>
<span id="LID120" rel="#L120">120</span>
<span id="LID121" rel="#L121">121</span>
<span id="LID122" rel="#L122">122</span>
<span id="LID123" rel="#L123">123</span>
<span id="LID124" rel="#L124">124</span>
<span id="LID125" rel="#L125">125</span>
<span id="LID126" rel="#L126">126</span>
<span id="LID127" rel="#L127">127</span>
<span id="LID128" rel="#L128">128</span>
<span id="LID129" rel="#L129">129</span>
<span id="LID130" rel="#L130">130</span>
<span id="LID131" rel="#L131">131</span>
<span id="LID132" rel="#L132">132</span>
<span id="LID133" rel="#L133">133</span>
<span id="LID134" rel="#L134">134</span>
<span id="LID135" rel="#L135">135</span>
<span id="LID136" rel="#L136">136</span>
<span id="LID137" rel="#L137">137</span>
<span id="LID138" rel="#L138">138</span>
<span id="LID139" rel="#L139">139</span>
<span id="LID140" rel="#L140">140</span>
<span id="LID141" rel="#L141">141</span>
<span id="LID142" rel="#L142">142</span>
<span id="LID143" rel="#L143">143</span>
<span id="LID144" rel="#L144">144</span>
<span id="LID145" rel="#L145">145</span>
<span id="LID146" rel="#L146">146</span>
<span id="LID147" rel="#L147">147</span>
<span id="LID148" rel="#L148">148</span>
<span id="LID149" rel="#L149">149</span>
<span id="LID150" rel="#L150">150</span>
<span id="LID151" rel="#L151">151</span>
<span id="LID152" rel="#L152">152</span>
<span id="LID153" rel="#L153">153</span>
<span id="LID154" rel="#L154">154</span>
<span id="LID155" rel="#L155">155</span>
<span id="LID156" rel="#L156">156</span>
<span id="LID157" rel="#L157">157</span>
<span id="LID158" rel="#L158">158</span>
<span id="LID159" rel="#L159">159</span>
<span id="LID160" rel="#L160">160</span>
<span id="LID161" rel="#L161">161</span>
<span id="LID162" rel="#L162">162</span>
<span id="LID163" rel="#L163">163</span>
<span id="LID164" rel="#L164">164</span>
<span id="LID165" rel="#L165">165</span>
<span id="LID166" rel="#L166">166</span>
<span id="LID167" rel="#L167">167</span>
<span id="LID168" rel="#L168">168</span>
<span id="LID169" rel="#L169">169</span>
<span id="LID170" rel="#L170">170</span>
<span id="LID171" rel="#L171">171</span>
<span id="LID172" rel="#L172">172</span>
<span id="LID173" rel="#L173">173</span>
<span id="LID174" rel="#L174">174</span>
<span id="LID175" rel="#L175">175</span>
<span id="LID176" rel="#L176">176</span>
<span id="LID177" rel="#L177">177</span>
<span id="LID178" rel="#L178">178</span>
<span id="LID179" rel="#L179">179</span>
<span id="LID180" rel="#L180">180</span>
<span id="LID181" rel="#L181">181</span>
<span id="LID182" rel="#L182">182</span>
<span id="LID183" rel="#L183">183</span>
<span id="LID184" rel="#L184">184</span>
<span id="LID185" rel="#L185">185</span>
<span id="LID186" rel="#L186">186</span>
<span id="LID187" rel="#L187">187</span>
<span id="LID188" rel="#L188">188</span>
<span id="LID189" rel="#L189">189</span>
<span id="LID190" rel="#L190">190</span>
<span id="LID191" rel="#L191">191</span>
<span id="LID192" rel="#L192">192</span>
<span id="LID193" rel="#L193">193</span>
<span id="LID194" rel="#L194">194</span>
<span id="LID195" rel="#L195">195</span>
<span id="LID196" rel="#L196">196</span>
<span id="LID197" rel="#L197">197</span>
<span id="LID198" rel="#L198">198</span>
<span id="LID199" rel="#L199">199</span>
<span id="LID200" rel="#L200">200</span>
<span id="LID201" rel="#L201">201</span>
<span id="LID202" rel="#L202">202</span>
<span id="LID203" rel="#L203">203</span>
<span id="LID204" rel="#L204">204</span>
<span id="LID205" rel="#L205">205</span>
<span id="LID206" rel="#L206">206</span>
<span id="LID207" rel="#L207">207</span>
<span id="LID208" rel="#L208">208</span>
<span id="LID209" rel="#L209">209</span>
<span id="LID210" rel="#L210">210</span>
<span id="LID211" rel="#L211">211</span>
<span id="LID212" rel="#L212">212</span>
<span id="LID213" rel="#L213">213</span>
<span id="LID214" rel="#L214">214</span>
<span id="LID215" rel="#L215">215</span>
<span id="LID216" rel="#L216">216</span>
<span id="LID217" rel="#L217">217</span>
<span id="LID218" rel="#L218">218</span>
<span id="LID219" rel="#L219">219</span>
<span id="LID220" rel="#L220">220</span>
<span id="LID221" rel="#L221">221</span>
<span id="LID222" rel="#L222">222</span>
<span id="LID223" rel="#L223">223</span>
<span id="LID224" rel="#L224">224</span>
<span id="LID225" rel="#L225">225</span>
<span id="LID226" rel="#L226">226</span>
<span id="LID227" rel="#L227">227</span>
<span id="LID228" rel="#L228">228</span>
<span id="LID229" rel="#L229">229</span>
<span id="LID230" rel="#L230">230</span>
<span id="LID231" rel="#L231">231</span>
<span id="LID232" rel="#L232">232</span>
<span id="LID233" rel="#L233">233</span>
<span id="LID234" rel="#L234">234</span>
<span id="LID235" rel="#L235">235</span>
<span id="LID236" rel="#L236">236</span>
<span id="LID237" rel="#L237">237</span>
<span id="LID238" rel="#L238">238</span>
<span id="LID239" rel="#L239">239</span>
<span id="LID240" rel="#L240">240</span>
<span id="LID241" rel="#L241">241</span>
<span id="LID242" rel="#L242">242</span>
<span id="LID243" rel="#L243">243</span>
<span id="LID244" rel="#L244">244</span>
<span id="LID245" rel="#L245">245</span>
<span id="LID246" rel="#L246">246</span>
<span id="LID247" rel="#L247">247</span>
<span id="LID248" rel="#L248">248</span>
<span id="LID249" rel="#L249">249</span>
<span id="LID250" rel="#L250">250</span>
<span id="LID251" rel="#L251">251</span>
<span id="LID252" rel="#L252">252</span>
<span id="LID253" rel="#L253">253</span>
<span id="LID254" rel="#L254">254</span>
<span id="LID255" rel="#L255">255</span>
<span id="LID256" rel="#L256">256</span>
<span id="LID257" rel="#L257">257</span>
<span id="LID258" rel="#L258">258</span>
<span id="LID259" rel="#L259">259</span>
<span id="LID260" rel="#L260">260</span>
<span id="LID261" rel="#L261">261</span>
<span id="LID262" rel="#L262">262</span>
<span id="LID263" rel="#L263">263</span>
<span id="LID264" rel="#L264">264</span>
<span id="LID265" rel="#L265">265</span>
<span id="LID266" rel="#L266">266</span>
<span id="LID267" rel="#L267">267</span>
<span id="LID268" rel="#L268">268</span>
<span id="LID269" rel="#L269">269</span>
<span id="LID270" rel="#L270">270</span>
<span id="LID271" rel="#L271">271</span>
<span id="LID272" rel="#L272">272</span>
<span id="LID273" rel="#L273">273</span>
<span id="LID274" rel="#L274">274</span>
<span id="LID275" rel="#L275">275</span>
<span id="LID276" rel="#L276">276</span>
<span id="LID277" rel="#L277">277</span>
<span id="LID278" rel="#L278">278</span>
<span id="LID279" rel="#L279">279</span>
<span id="LID280" rel="#L280">280</span>
<span id="LID281" rel="#L281">281</span>
<span id="LID282" rel="#L282">282</span>
<span id="LID283" rel="#L283">283</span>
<span id="LID284" rel="#L284">284</span>
<span id="LID285" rel="#L285">285</span>
<span id="LID286" rel="#L286">286</span>
<span id="LID287" rel="#L287">287</span>
<span id="LID288" rel="#L288">288</span>
<span id="LID289" rel="#L289">289</span>
<span id="LID290" rel="#L290">290</span>
<span id="LID291" rel="#L291">291</span>
<span id="LID292" rel="#L292">292</span>
<span id="LID293" rel="#L293">293</span>
<span id="LID294" rel="#L294">294</span>
<span id="LID295" rel="#L295">295</span>
<span id="LID296" rel="#L296">296</span>
<span id="LID297" rel="#L297">297</span>
<span id="LID298" rel="#L298">298</span>
<span id="LID299" rel="#L299">299</span>
<span id="LID300" rel="#L300">300</span>
<span id="LID301" rel="#L301">301</span>
<span id="LID302" rel="#L302">302</span>
<span id="LID303" rel="#L303">303</span>
<span id="LID304" rel="#L304">304</span>
<span id="LID305" rel="#L305">305</span>
<span id="LID306" rel="#L306">306</span>
<span id="LID307" rel="#L307">307</span>
<span id="LID308" rel="#L308">308</span>
<span id="LID309" rel="#L309">309</span>
<span id="LID310" rel="#L310">310</span>
<span id="LID311" rel="#L311">311</span>
<span id="LID312" rel="#L312">312</span>
<span id="LID313" rel="#L313">313</span>
<span id="LID314" rel="#L314">314</span>
<span id="LID315" rel="#L315">315</span>
<span id="LID316" rel="#L316">316</span>
<span id="LID317" rel="#L317">317</span>
<span id="LID318" rel="#L318">318</span>
<span id="LID319" rel="#L319">319</span>
<span id="LID320" rel="#L320">320</span>
<span id="LID321" rel="#L321">321</span>
<span id="LID322" rel="#L322">322</span>
<span id="LID323" rel="#L323">323</span>
<span id="LID324" rel="#L324">324</span>
<span id="LID325" rel="#L325">325</span>
<span id="LID326" rel="#L326">326</span>
<span id="LID327" rel="#L327">327</span>
<span id="LID328" rel="#L328">328</span>
<span id="LID329" rel="#L329">329</span>
<span id="LID330" rel="#L330">330</span>
<span id="LID331" rel="#L331">331</span>
<span id="LID332" rel="#L332">332</span>
<span id="LID333" rel="#L333">333</span>
<span id="LID334" rel="#L334">334</span>
<span id="LID335" rel="#L335">335</span>
<span id="LID336" rel="#L336">336</span>
<span id="LID337" rel="#L337">337</span>
<span id="LID338" rel="#L338">338</span>
<span id="LID339" rel="#L339">339</span>
<span id="LID340" rel="#L340">340</span>
<span id="LID341" rel="#L341">341</span>
<span id="LID342" rel="#L342">342</span>
<span id="LID343" rel="#L343">343</span>
<span id="LID344" rel="#L344">344</span>
<span id="LID345" rel="#L345">345</span>
<span id="LID346" rel="#L346">346</span>
<span id="LID347" rel="#L347">347</span>
<span id="LID348" rel="#L348">348</span>
<span id="LID349" rel="#L349">349</span>
<span id="LID350" rel="#L350">350</span>
<span id="LID351" rel="#L351">351</span>
<span id="LID352" rel="#L352">352</span>
<span id="LID353" rel="#L353">353</span>
<span id="LID354" rel="#L354">354</span>
<span id="LID355" rel="#L355">355</span>
<span id="LID356" rel="#L356">356</span>
<span id="LID357" rel="#L357">357</span>
<span id="LID358" rel="#L358">358</span>
<span id="LID359" rel="#L359">359</span>
<span id="LID360" rel="#L360">360</span>
<span id="LID361" rel="#L361">361</span>
<span id="LID362" rel="#L362">362</span>
<span id="LID363" rel="#L363">363</span>
<span id="LID364" rel="#L364">364</span>
<span id="LID365" rel="#L365">365</span>
<span id="LID366" rel="#L366">366</span>
<span id="LID367" rel="#L367">367</span>
<span id="LID368" rel="#L368">368</span>
<span id="LID369" rel="#L369">369</span>
<span id="LID370" rel="#L370">370</span>
<span id="LID371" rel="#L371">371</span>
<span id="LID372" rel="#L372">372</span>
<span id="LID373" rel="#L373">373</span>
<span id="LID374" rel="#L374">374</span>
<span id="LID375" rel="#L375">375</span>
<span id="LID376" rel="#L376">376</span>
<span id="LID377" rel="#L377">377</span>
<span id="LID378" rel="#L378">378</span>
<span id="LID379" rel="#L379">379</span>
<span id="LID380" rel="#L380">380</span>
<span id="LID381" rel="#L381">381</span>
<span id="LID382" rel="#L382">382</span>
<span id="LID383" rel="#L383">383</span>
<span id="LID384" rel="#L384">384</span>
<span id="LID385" rel="#L385">385</span>
<span id="LID386" rel="#L386">386</span>
<span id="LID387" rel="#L387">387</span>
<span id="LID388" rel="#L388">388</span>
<span id="LID389" rel="#L389">389</span>
<span id="LID390" rel="#L390">390</span>
<span id="LID391" rel="#L391">391</span>
<span id="LID392" rel="#L392">392</span>
<span id="LID393" rel="#L393">393</span>
<span id="LID394" rel="#L394">394</span>
<span id="LID395" rel="#L395">395</span>
<span id="LID396" rel="#L396">396</span>
<span id="LID397" rel="#L397">397</span>
<span id="LID398" rel="#L398">398</span>
<span id="LID399" rel="#L399">399</span>
<span id="LID400" rel="#L400">400</span>
<span id="LID401" rel="#L401">401</span>
<span id="LID402" rel="#L402">402</span>
<span id="LID403" rel="#L403">403</span>
<span id="LID404" rel="#L404">404</span>
<span id="LID405" rel="#L405">405</span>
<span id="LID406" rel="#L406">406</span>
<span id="LID407" rel="#L407">407</span>
<span id="LID408" rel="#L408">408</span>
<span id="LID409" rel="#L409">409</span>
<span id="LID410" rel="#L410">410</span>
<span id="LID411" rel="#L411">411</span>
<span id="LID412" rel="#L412">412</span>
<span id="LID413" rel="#L413">413</span>
<span id="LID414" rel="#L414">414</span>
<span id="LID415" rel="#L415">415</span>
<span id="LID416" rel="#L416">416</span>
<span id="LID417" rel="#L417">417</span>
<span id="LID418" rel="#L418">418</span>
<span id="LID419" rel="#L419">419</span>
<span id="LID420" rel="#L420">420</span>
<span id="LID421" rel="#L421">421</span>
<span id="LID422" rel="#L422">422</span>
<span id="LID423" rel="#L423">423</span>
<span id="LID424" rel="#L424">424</span>
<span id="LID425" rel="#L425">425</span>
<span id="LID426" rel="#L426">426</span>
<span id="LID427" rel="#L427">427</span>
<span id="LID428" rel="#L428">428</span>
<span id="LID429" rel="#L429">429</span>
<span id="LID430" rel="#L430">430</span>
<span id="LID431" rel="#L431">431</span>
<span id="LID432" rel="#L432">432</span>
<span id="LID433" rel="#L433">433</span>
<span id="LID434" rel="#L434">434</span>
<span id="LID435" rel="#L435">435</span>
<span id="LID436" rel="#L436">436</span>
<span id="LID437" rel="#L437">437</span>
<span id="LID438" rel="#L438">438</span>
<span id="LID439" rel="#L439">439</span>
<span id="LID440" rel="#L440">440</span>
<span id="LID441" rel="#L441">441</span>
<span id="LID442" rel="#L442">442</span>
<span id="LID443" rel="#L443">443</span>
<span id="LID444" rel="#L444">444</span>
<span id="LID445" rel="#L445">445</span>
<span id="LID446" rel="#L446">446</span>
<span id="LID447" rel="#L447">447</span>
<span id="LID448" rel="#L448">448</span>
<span id="LID449" rel="#L449">449</span>
<span id="LID450" rel="#L450">450</span>
<span id="LID451" rel="#L451">451</span>
<span id="LID452" rel="#L452">452</span>
<span id="LID453" rel="#L453">453</span>
<span id="LID454" rel="#L454">454</span>
<span id="LID455" rel="#L455">455</span>
<span id="LID456" rel="#L456">456</span>
<span id="LID457" rel="#L457">457</span>
<span id="LID458" rel="#L458">458</span>
<span id="LID459" rel="#L459">459</span>
<span id="LID460" rel="#L460">460</span>
<span id="LID461" rel="#L461">461</span>
<span id="LID462" rel="#L462">462</span>
<span id="LID463" rel="#L463">463</span>
<span id="LID464" rel="#L464">464</span>
<span id="LID465" rel="#L465">465</span>
<span id="LID466" rel="#L466">466</span>
<span id="LID467" rel="#L467">467</span>
<span id="LID468" rel="#L468">468</span>
<span id="LID469" rel="#L469">469</span>
<span id="LID470" rel="#L470">470</span>
<span id="LID471" rel="#L471">471</span>
<span id="LID472" rel="#L472">472</span>
<span id="LID473" rel="#L473">473</span>
<span id="LID474" rel="#L474">474</span>
<span id="LID475" rel="#L475">475</span>
<span id="LID476" rel="#L476">476</span>
<span id="LID477" rel="#L477">477</span>
<span id="LID478" rel="#L478">478</span>
<span id="LID479" rel="#L479">479</span>
<span id="LID480" rel="#L480">480</span>
<span id="LID481" rel="#L481">481</span>
<span id="LID482" rel="#L482">482</span>
<span id="LID483" rel="#L483">483</span>
<span id="LID484" rel="#L484">484</span>
<span id="LID485" rel="#L485">485</span>
<span id="LID486" rel="#L486">486</span>
<span id="LID487" rel="#L487">487</span>
<span id="LID488" rel="#L488">488</span>
<span id="LID489" rel="#L489">489</span>
<span id="LID490" rel="#L490">490</span>
<span id="LID491" rel="#L491">491</span>
<span id="LID492" rel="#L492">492</span>
<span id="LID493" rel="#L493">493</span>
<span id="LID494" rel="#L494">494</span>
<span id="LID495" rel="#L495">495</span>
<span id="LID496" rel="#L496">496</span>
<span id="LID497" rel="#L497">497</span>
<span id="LID498" rel="#L498">498</span>
<span id="LID499" rel="#L499">499</span>
<span id="LID500" rel="#L500">500</span>
<span id="LID501" rel="#L501">501</span>
<span id="LID502" rel="#L502">502</span>
<span id="LID503" rel="#L503">503</span>
<span id="LID504" rel="#L504">504</span>
<span id="LID505" rel="#L505">505</span>
<span id="LID506" rel="#L506">506</span>
<span id="LID507" rel="#L507">507</span>
<span id="LID508" rel="#L508">508</span>
<span id="LID509" rel="#L509">509</span>
<span id="LID510" rel="#L510">510</span>
<span id="LID511" rel="#L511">511</span>
<span id="LID512" rel="#L512">512</span>
<span id="LID513" rel="#L513">513</span>
<span id="LID514" rel="#L514">514</span>
<span id="LID515" rel="#L515">515</span>
<span id="LID516" rel="#L516">516</span>
<span id="LID517" rel="#L517">517</span>
<span id="LID518" rel="#L518">518</span>
<span id="LID519" rel="#L519">519</span>
<span id="LID520" rel="#L520">520</span>
<span id="LID521" rel="#L521">521</span>
<span id="LID522" rel="#L522">522</span>
<span id="LID523" rel="#L523">523</span>
<span id="LID524" rel="#L524">524</span>
<span id="LID525" rel="#L525">525</span>
<span id="LID526" rel="#L526">526</span>
<span id="LID527" rel="#L527">527</span>
<span id="LID528" rel="#L528">528</span>
<span id="LID529" rel="#L529">529</span>
<span id="LID530" rel="#L530">530</span>
<span id="LID531" rel="#L531">531</span>
<span id="LID532" rel="#L532">532</span>
<span id="LID533" rel="#L533">533</span>
<span id="LID534" rel="#L534">534</span>
<span id="LID535" rel="#L535">535</span>
<span id="LID536" rel="#L536">536</span>
<span id="LID537" rel="#L537">537</span>
<span id="LID538" rel="#L538">538</span>
<span id="LID539" rel="#L539">539</span>
<span id="LID540" rel="#L540">540</span>
<span id="LID541" rel="#L541">541</span>
<span id="LID542" rel="#L542">542</span>
<span id="LID543" rel="#L543">543</span>
<span id="LID544" rel="#L544">544</span>
<span id="LID545" rel="#L545">545</span>
<span id="LID546" rel="#L546">546</span>
<span id="LID547" rel="#L547">547</span>
<span id="LID548" rel="#L548">548</span>
<span id="LID549" rel="#L549">549</span>
<span id="LID550" rel="#L550">550</span>
<span id="LID551" rel="#L551">551</span>
<span id="LID552" rel="#L552">552</span>
<span id="LID553" rel="#L553">553</span>
<span id="LID554" rel="#L554">554</span>
<span id="LID555" rel="#L555">555</span>
<span id="LID556" rel="#L556">556</span>
<span id="LID557" rel="#L557">557</span>
<span id="LID558" rel="#L558">558</span>
<span id="LID559" rel="#L559">559</span>
<span id="LID560" rel="#L560">560</span>
<span id="LID561" rel="#L561">561</span>
<span id="LID562" rel="#L562">562</span>
<span id="LID563" rel="#L563">563</span>
<span id="LID564" rel="#L564">564</span>
<span id="LID565" rel="#L565">565</span>
<span id="LID566" rel="#L566">566</span>
<span id="LID567" rel="#L567">567</span>
<span id="LID568" rel="#L568">568</span>
<span id="LID569" rel="#L569">569</span>
<span id="LID570" rel="#L570">570</span>
<span id="LID571" rel="#L571">571</span>
<span id="LID572" rel="#L572">572</span>
<span id="LID573" rel="#L573">573</span>
<span id="LID574" rel="#L574">574</span>
<span id="LID575" rel="#L575">575</span>
<span id="LID576" rel="#L576">576</span>
<span id="LID577" rel="#L577">577</span>
<span id="LID578" rel="#L578">578</span>
<span id="LID579" rel="#L579">579</span>
<span id="LID580" rel="#L580">580</span>
<span id="LID581" rel="#L581">581</span>
<span id="LID582" rel="#L582">582</span>
<span id="LID583" rel="#L583">583</span>
<span id="LID584" rel="#L584">584</span>
<span id="LID585" rel="#L585">585</span>
<span id="LID586" rel="#L586">586</span>
<span id="LID587" rel="#L587">587</span>
<span id="LID588" rel="#L588">588</span>
<span id="LID589" rel="#L589">589</span>
<span id="LID590" rel="#L590">590</span>
<span id="LID591" rel="#L591">591</span>
<span id="LID592" rel="#L592">592</span>
<span id="LID593" rel="#L593">593</span>
<span id="LID594" rel="#L594">594</span>
<span id="LID595" rel="#L595">595</span>
<span id="LID596" rel="#L596">596</span>
<span id="LID597" rel="#L597">597</span>
<span id="LID598" rel="#L598">598</span>
<span id="LID599" rel="#L599">599</span>
<span id="LID600" rel="#L600">600</span>
<span id="LID601" rel="#L601">601</span>
<span id="LID602" rel="#L602">602</span>
<span id="LID603" rel="#L603">603</span>
<span id="LID604" rel="#L604">604</span>
<span id="LID605" rel="#L605">605</span>
<span id="LID606" rel="#L606">606</span>
<span id="LID607" rel="#L607">607</span>
<span id="LID608" rel="#L608">608</span>
<span id="LID609" rel="#L609">609</span>
<span id="LID610" rel="#L610">610</span>
<span id="LID611" rel="#L611">611</span>
<span id="LID612" rel="#L612">612</span>
<span id="LID613" rel="#L613">613</span>
<span id="LID614" rel="#L614">614</span>
<span id="LID615" rel="#L615">615</span>
<span id="LID616" rel="#L616">616</span>
<span id="LID617" rel="#L617">617</span>
<span id="LID618" rel="#L618">618</span>
<span id="LID619" rel="#L619">619</span>
<span id="LID620" rel="#L620">620</span>
<span id="LID621" rel="#L621">621</span>
<span id="LID622" rel="#L622">622</span>
<span id="LID623" rel="#L623">623</span>
<span id="LID624" rel="#L624">624</span>
<span id="LID625" rel="#L625">625</span>
<span id="LID626" rel="#L626">626</span>
<span id="LID627" rel="#L627">627</span>
<span id="LID628" rel="#L628">628</span>
<span id="LID629" rel="#L629">629</span>
<span id="LID630" rel="#L630">630</span>
<span id="LID631" rel="#L631">631</span>
<span id="LID632" rel="#L632">632</span>
<span id="LID633" rel="#L633">633</span>
<span id="LID634" rel="#L634">634</span>
<span id="LID635" rel="#L635">635</span>
<span id="LID636" rel="#L636">636</span>
<span id="LID637" rel="#L637">637</span>
<span id="LID638" rel="#L638">638</span>
<span id="LID639" rel="#L639">639</span>
<span id="LID640" rel="#L640">640</span>
<span id="LID641" rel="#L641">641</span>
<span id="LID642" rel="#L642">642</span>
<span id="LID643" rel="#L643">643</span>
<span id="LID644" rel="#L644">644</span>
<span id="LID645" rel="#L645">645</span>
<span id="LID646" rel="#L646">646</span>
<span id="LID647" rel="#L647">647</span>
<span id="LID648" rel="#L648">648</span>
<span id="LID649" rel="#L649">649</span>
<span id="LID650" rel="#L650">650</span>
<span id="LID651" rel="#L651">651</span>
<span id="LID652" rel="#L652">652</span>
<span id="LID653" rel="#L653">653</span>
<span id="LID654" rel="#L654">654</span>
<span id="LID655" rel="#L655">655</span>
<span id="LID656" rel="#L656">656</span>
<span id="LID657" rel="#L657">657</span>
<span id="LID658" rel="#L658">658</span>
<span id="LID659" rel="#L659">659</span>
<span id="LID660" rel="#L660">660</span>
<span id="LID661" rel="#L661">661</span>
<span id="LID662" rel="#L662">662</span>
<span id="LID663" rel="#L663">663</span>
<span id="LID664" rel="#L664">664</span>
<span id="LID665" rel="#L665">665</span>
<span id="LID666" rel="#L666">666</span>
<span id="LID667" rel="#L667">667</span>
<span id="LID668" rel="#L668">668</span>
<span id="LID669" rel="#L669">669</span>
<span id="LID670" rel="#L670">670</span>
<span id="LID671" rel="#L671">671</span>
<span id="LID672" rel="#L672">672</span>
<span id="LID673" rel="#L673">673</span>
<span id="LID674" rel="#L674">674</span>
<span id="LID675" rel="#L675">675</span>
<span id="LID676" rel="#L676">676</span>
<span id="LID677" rel="#L677">677</span>
<span id="LID678" rel="#L678">678</span>
<span id="LID679" rel="#L679">679</span>
<span id="LID680" rel="#L680">680</span>
<span id="LID681" rel="#L681">681</span>
<span id="LID682" rel="#L682">682</span>
<span id="LID683" rel="#L683">683</span>
<span id="LID684" rel="#L684">684</span>
<span id="LID685" rel="#L685">685</span>
<span id="LID686" rel="#L686">686</span>
<span id="LID687" rel="#L687">687</span>
<span id="LID688" rel="#L688">688</span>
<span id="LID689" rel="#L689">689</span>
<span id="LID690" rel="#L690">690</span>
<span id="LID691" rel="#L691">691</span>
<span id="LID692" rel="#L692">692</span>
<span id="LID693" rel="#L693">693</span>
<span id="LID694" rel="#L694">694</span>
<span id="LID695" rel="#L695">695</span>
<span id="LID696" rel="#L696">696</span>
<span id="LID697" rel="#L697">697</span>
<span id="LID698" rel="#L698">698</span>
<span id="LID699" rel="#L699">699</span>
<span id="LID700" rel="#L700">700</span>
<span id="LID701" rel="#L701">701</span>
<span id="LID702" rel="#L702">702</span>
<span id="LID703" rel="#L703">703</span>
<span id="LID704" rel="#L704">704</span>
<span id="LID705" rel="#L705">705</span>
<span id="LID706" rel="#L706">706</span>
<span id="LID707" rel="#L707">707</span>
<span id="LID708" rel="#L708">708</span>
<span id="LID709" rel="#L709">709</span>
<span id="LID710" rel="#L710">710</span>
<span id="LID711" rel="#L711">711</span>
<span id="LID712" rel="#L712">712</span>
<span id="LID713" rel="#L713">713</span>
<span id="LID714" rel="#L714">714</span>
<span id="LID715" rel="#L715">715</span>
<span id="LID716" rel="#L716">716</span>
<span id="LID717" rel="#L717">717</span>
<span id="LID718" rel="#L718">718</span>
<span id="LID719" rel="#L719">719</span>
<span id="LID720" rel="#L720">720</span>
<span id="LID721" rel="#L721">721</span>
<span id="LID722" rel="#L722">722</span>
<span id="LID723" rel="#L723">723</span>
<span id="LID724" rel="#L724">724</span>
<span id="LID725" rel="#L725">725</span>
<span id="LID726" rel="#L726">726</span>
<span id="LID727" rel="#L727">727</span>
<span id="LID728" rel="#L728">728</span>
<span id="LID729" rel="#L729">729</span>
<span id="LID730" rel="#L730">730</span>
<span id="LID731" rel="#L731">731</span>
<span id="LID732" rel="#L732">732</span>
<span id="LID733" rel="#L733">733</span>
<span id="LID734" rel="#L734">734</span>
<span id="LID735" rel="#L735">735</span>
<span id="LID736" rel="#L736">736</span>
<span id="LID737" rel="#L737">737</span>
<span id="LID738" rel="#L738">738</span>
<span id="LID739" rel="#L739">739</span>
<span id="LID740" rel="#L740">740</span>
<span id="LID741" rel="#L741">741</span>
<span id="LID742" rel="#L742">742</span>
<span id="LID743" rel="#L743">743</span>
<span id="LID744" rel="#L744">744</span>
<span id="LID745" rel="#L745">745</span>
<span id="LID746" rel="#L746">746</span>
<span id="LID747" rel="#L747">747</span>
<span id="LID748" rel="#L748">748</span>
<span id="LID749" rel="#L749">749</span>
<span id="LID750" rel="#L750">750</span>
<span id="LID751" rel="#L751">751</span>
<span id="LID752" rel="#L752">752</span>
<span id="LID753" rel="#L753">753</span>
<span id="LID754" rel="#L754">754</span>
<span id="LID755" rel="#L755">755</span>
<span id="LID756" rel="#L756">756</span>
<span id="LID757" rel="#L757">757</span>
<span id="LID758" rel="#L758">758</span>
<span id="LID759" rel="#L759">759</span>
<span id="LID760" rel="#L760">760</span>
<span id="LID761" rel="#L761">761</span>
<span id="LID762" rel="#L762">762</span>
<span id="LID763" rel="#L763">763</span>
<span id="LID764" rel="#L764">764</span>
<span id="LID765" rel="#L765">765</span>
<span id="LID766" rel="#L766">766</span>
<span id="LID767" rel="#L767">767</span>
<span id="LID768" rel="#L768">768</span>
<span id="LID769" rel="#L769">769</span>
<span id="LID770" rel="#L770">770</span>
<span id="LID771" rel="#L771">771</span>
<span id="LID772" rel="#L772">772</span>
<span id="LID773" rel="#L773">773</span>
<span id="LID774" rel="#L774">774</span>
<span id="LID775" rel="#L775">775</span>
<span id="LID776" rel="#L776">776</span>
<span id="LID777" rel="#L777">777</span>
<span id="LID778" rel="#L778">778</span>
<span id="LID779" rel="#L779">779</span>
<span id="LID780" rel="#L780">780</span>
<span id="LID781" rel="#L781">781</span>
<span id="LID782" rel="#L782">782</span>
<span id="LID783" rel="#L783">783</span>
<span id="LID784" rel="#L784">784</span>
<span id="LID785" rel="#L785">785</span>
<span id="LID786" rel="#L786">786</span>
<span id="LID787" rel="#L787">787</span>
<span id="LID788" rel="#L788">788</span>
<span id="LID789" rel="#L789">789</span>
<span id="LID790" rel="#L790">790</span>
<span id="LID791" rel="#L791">791</span>
<span id="LID792" rel="#L792">792</span>
<span id="LID793" rel="#L793">793</span>
<span id="LID794" rel="#L794">794</span>
<span id="LID795" rel="#L795">795</span>
<span id="LID796" rel="#L796">796</span>
<span id="LID797" rel="#L797">797</span>
<span id="LID798" rel="#L798">798</span>
<span id="LID799" rel="#L799">799</span>
<span id="LID800" rel="#L800">800</span>
<span id="LID801" rel="#L801">801</span>
<span id="LID802" rel="#L802">802</span>
<span id="LID803" rel="#L803">803</span>
<span id="LID804" rel="#L804">804</span>
<span id="LID805" rel="#L805">805</span>
<span id="LID806" rel="#L806">806</span>
<span id="LID807" rel="#L807">807</span>
<span id="LID808" rel="#L808">808</span>
<span id="LID809" rel="#L809">809</span>
<span id="LID810" rel="#L810">810</span>
<span id="LID811" rel="#L811">811</span>
<span id="LID812" rel="#L812">812</span>
<span id="LID813" rel="#L813">813</span>
<span id="LID814" rel="#L814">814</span>
<span id="LID815" rel="#L815">815</span>
<span id="LID816" rel="#L816">816</span>
<span id="LID817" rel="#L817">817</span>
<span id="LID818" rel="#L818">818</span>
<span id="LID819" rel="#L819">819</span>
<span id="LID820" rel="#L820">820</span>
<span id="LID821" rel="#L821">821</span>
<span id="LID822" rel="#L822">822</span>
<span id="LID823" rel="#L823">823</span>
<span id="LID824" rel="#L824">824</span>
<span id="LID825" rel="#L825">825</span>
<span id="LID826" rel="#L826">826</span>
<span id="LID827" rel="#L827">827</span>
<span id="LID828" rel="#L828">828</span>
<span id="LID829" rel="#L829">829</span>
<span id="LID830" rel="#L830">830</span>
<span id="LID831" rel="#L831">831</span>
<span id="LID832" rel="#L832">832</span>
<span id="LID833" rel="#L833">833</span>
<span id="LID834" rel="#L834">834</span>
<span id="LID835" rel="#L835">835</span>
<span id="LID836" rel="#L836">836</span>
<span id="LID837" rel="#L837">837</span>
<span id="LID838" rel="#L838">838</span>
<span id="LID839" rel="#L839">839</span>
<span id="LID840" rel="#L840">840</span>
<span id="LID841" rel="#L841">841</span>
<span id="LID842" rel="#L842">842</span>
<span id="LID843" rel="#L843">843</span>
<span id="LID844" rel="#L844">844</span>
<span id="LID845" rel="#L845">845</span>
<span id="LID846" rel="#L846">846</span>
<span id="LID847" rel="#L847">847</span>
<span id="LID848" rel="#L848">848</span>
<span id="LID849" rel="#L849">849</span>
<span id="LID850" rel="#L850">850</span>
<span id="LID851" rel="#L851">851</span>
<span id="LID852" rel="#L852">852</span>
<span id="LID853" rel="#L853">853</span>
<span id="LID854" rel="#L854">854</span>
<span id="LID855" rel="#L855">855</span>
<span id="LID856" rel="#L856">856</span>
<span id="LID857" rel="#L857">857</span>
<span id="LID858" rel="#L858">858</span>
<span id="LID859" rel="#L859">859</span>
<span id="LID860" rel="#L860">860</span>
<span id="LID861" rel="#L861">861</span>
<span id="LID862" rel="#L862">862</span>
<span id="LID863" rel="#L863">863</span>
<span id="LID864" rel="#L864">864</span>
<span id="LID865" rel="#L865">865</span>
<span id="LID866" rel="#L866">866</span>
<span id="LID867" rel="#L867">867</span>
<span id="LID868" rel="#L868">868</span>
<span id="LID869" rel="#L869">869</span>
<span id="LID870" rel="#L870">870</span>
<span id="LID871" rel="#L871">871</span>
<span id="LID872" rel="#L872">872</span>
<span id="LID873" rel="#L873">873</span>
<span id="LID874" rel="#L874">874</span>
<span id="LID875" rel="#L875">875</span>
<span id="LID876" rel="#L876">876</span>
<span id="LID877" rel="#L877">877</span>
<span id="LID878" rel="#L878">878</span>
<span id="LID879" rel="#L879">879</span>
<span id="LID880" rel="#L880">880</span>
<span id="LID881" rel="#L881">881</span>
<span id="LID882" rel="#L882">882</span>
<span id="LID883" rel="#L883">883</span>
<span id="LID884" rel="#L884">884</span>
<span id="LID885" rel="#L885">885</span>
<span id="LID886" rel="#L886">886</span>
<span id="LID887" rel="#L887">887</span>
<span id="LID888" rel="#L888">888</span>
<span id="LID889" rel="#L889">889</span>
<span id="LID890" rel="#L890">890</span>
<span id="LID891" rel="#L891">891</span>
<span id="LID892" rel="#L892">892</span>
<span id="LID893" rel="#L893">893</span>
<span id="LID894" rel="#L894">894</span>
<span id="LID895" rel="#L895">895</span>
<span id="LID896" rel="#L896">896</span>
<span id="LID897" rel="#L897">897</span>
<span id="LID898" rel="#L898">898</span>
<span id="LID899" rel="#L899">899</span>
<span id="LID900" rel="#L900">900</span>
<span id="LID901" rel="#L901">901</span>
<span id="LID902" rel="#L902">902</span>
<span id="LID903" rel="#L903">903</span>
<span id="LID904" rel="#L904">904</span>
<span id="LID905" rel="#L905">905</span>
<span id="LID906" rel="#L906">906</span>
<span id="LID907" rel="#L907">907</span>
<span id="LID908" rel="#L908">908</span>
<span id="LID909" rel="#L909">909</span>
<span id="LID910" rel="#L910">910</span>
<span id="LID911" rel="#L911">911</span>
<span id="LID912" rel="#L912">912</span>
<span id="LID913" rel="#L913">913</span>
<span id="LID914" rel="#L914">914</span>
<span id="LID915" rel="#L915">915</span>
<span id="LID916" rel="#L916">916</span>
<span id="LID917" rel="#L917">917</span>
<span id="LID918" rel="#L918">918</span>
<span id="LID919" rel="#L919">919</span>
<span id="LID920" rel="#L920">920</span>
<span id="LID921" rel="#L921">921</span>
<span id="LID922" rel="#L922">922</span>
<span id="LID923" rel="#L923">923</span>
<span id="LID924" rel="#L924">924</span>
<span id="LID925" rel="#L925">925</span>
<span id="LID926" rel="#L926">926</span>
<span id="LID927" rel="#L927">927</span>
<span id="LID928" rel="#L928">928</span>
<span id="LID929" rel="#L929">929</span>
<span id="LID930" rel="#L930">930</span>
<span id="LID931" rel="#L931">931</span>
<span id="LID932" rel="#L932">932</span>
<span id="LID933" rel="#L933">933</span>
<span id="LID934" rel="#L934">934</span>
<span id="LID935" rel="#L935">935</span>
<span id="LID936" rel="#L936">936</span>
<span id="LID937" rel="#L937">937</span>
<span id="LID938" rel="#L938">938</span>
<span id="LID939" rel="#L939">939</span>
<span id="LID940" rel="#L940">940</span>
<span id="LID941" rel="#L941">941</span>
<span id="LID942" rel="#L942">942</span>
<span id="LID943" rel="#L943">943</span>
<span id="LID944" rel="#L944">944</span>
<span id="LID945" rel="#L945">945</span>
<span id="LID946" rel="#L946">946</span>
<span id="LID947" rel="#L947">947</span>
<span id="LID948" rel="#L948">948</span>
<span id="LID949" rel="#L949">949</span>
<span id="LID950" rel="#L950">950</span>
<span id="LID951" rel="#L951">951</span>
<span id="LID952" rel="#L952">952</span>
<span id="LID953" rel="#L953">953</span>
<span id="LID954" rel="#L954">954</span>
<span id="LID955" rel="#L955">955</span>
<span id="LID956" rel="#L956">956</span>
<span id="LID957" rel="#L957">957</span>
<span id="LID958" rel="#L958">958</span>
<span id="LID959" rel="#L959">959</span>
<span id="LID960" rel="#L960">960</span>
<span id="LID961" rel="#L961">961</span>
<span id="LID962" rel="#L962">962</span>
<span id="LID963" rel="#L963">963</span>
<span id="LID964" rel="#L964">964</span>
<span id="LID965" rel="#L965">965</span>
<span id="LID966" rel="#L966">966</span>
<span id="LID967" rel="#L967">967</span>
<span id="LID968" rel="#L968">968</span>
<span id="LID969" rel="#L969">969</span>
<span id="LID970" rel="#L970">970</span>
<span id="LID971" rel="#L971">971</span>
<span id="LID972" rel="#L972">972</span>
<span id="LID973" rel="#L973">973</span>
<span id="LID974" rel="#L974">974</span>
<span id="LID975" rel="#L975">975</span>
<span id="LID976" rel="#L976">976</span>
<span id="LID977" rel="#L977">977</span>
<span id="LID978" rel="#L978">978</span>
<span id="LID979" rel="#L979">979</span>
<span id="LID980" rel="#L980">980</span>
<span id="LID981" rel="#L981">981</span>
<span id="LID982" rel="#L982">982</span>
<span id="LID983" rel="#L983">983</span>
<span id="LID984" rel="#L984">984</span>
<span id="LID985" rel="#L985">985</span>
<span id="LID986" rel="#L986">986</span>
<span id="LID987" rel="#L987">987</span>
<span id="LID988" rel="#L988">988</span>
<span id="LID989" rel="#L989">989</span>
<span id="LID990" rel="#L990">990</span>
<span id="LID991" rel="#L991">991</span>
<span id="LID992" rel="#L992">992</span>
<span id="LID993" rel="#L993">993</span>
<span id="LID994" rel="#L994">994</span>
<span id="LID995" rel="#L995">995</span>
<span id="LID996" rel="#L996">996</span>
<span id="LID997" rel="#L997">997</span>
<span id="LID998" rel="#L998">998</span>
<span id="LID999" rel="#L999">999</span>
<span id="LID1000" rel="#L1000">1000</span>
<span id="LID1001" rel="#L1001">1001</span>
<span id="LID1002" rel="#L1002">1002</span>
<span id="LID1003" rel="#L1003">1003</span>
<span id="LID1004" rel="#L1004">1004</span>
<span id="LID1005" rel="#L1005">1005</span>
<span id="LID1006" rel="#L1006">1006</span>
<span id="LID1007" rel="#L1007">1007</span>
<span id="LID1008" rel="#L1008">1008</span>
<span id="LID1009" rel="#L1009">1009</span>
<span id="LID1010" rel="#L1010">1010</span>
<span id="LID1011" rel="#L1011">1011</span>
<span id="LID1012" rel="#L1012">1012</span>
<span id="LID1013" rel="#L1013">1013</span>
<span id="LID1014" rel="#L1014">1014</span>
<span id="LID1015" rel="#L1015">1015</span>
<span id="LID1016" rel="#L1016">1016</span>
<span id="LID1017" rel="#L1017">1017</span>
<span id="LID1018" rel="#L1018">1018</span>
<span id="LID1019" rel="#L1019">1019</span>
<span id="LID1020" rel="#L1020">1020</span>
<span id="LID1021" rel="#L1021">1021</span>
<span id="LID1022" rel="#L1022">1022</span>
<span id="LID1023" rel="#L1023">1023</span>
<span id="LID1024" rel="#L1024">1024</span>
<span id="LID1025" rel="#L1025">1025</span>
<span id="LID1026" rel="#L1026">1026</span>
<span id="LID1027" rel="#L1027">1027</span>
<span id="LID1028" rel="#L1028">1028</span>
<span id="LID1029" rel="#L1029">1029</span>
<span id="LID1030" rel="#L1030">1030</span>
<span id="LID1031" rel="#L1031">1031</span>
<span id="LID1032" rel="#L1032">1032</span>
<span id="LID1033" rel="#L1033">1033</span>
<span id="LID1034" rel="#L1034">1034</span>
<span id="LID1035" rel="#L1035">1035</span>
<span id="LID1036" rel="#L1036">1036</span>
<span id="LID1037" rel="#L1037">1037</span>
<span id="LID1038" rel="#L1038">1038</span>
<span id="LID1039" rel="#L1039">1039</span>
<span id="LID1040" rel="#L1040">1040</span>
<span id="LID1041" rel="#L1041">1041</span>
<span id="LID1042" rel="#L1042">1042</span>
<span id="LID1043" rel="#L1043">1043</span>
<span id="LID1044" rel="#L1044">1044</span>
<span id="LID1045" rel="#L1045">1045</span>
<span id="LID1046" rel="#L1046">1046</span>
<span id="LID1047" rel="#L1047">1047</span>
<span id="LID1048" rel="#L1048">1048</span>
<span id="LID1049" rel="#L1049">1049</span>
<span id="LID1050" rel="#L1050">1050</span>
<span id="LID1051" rel="#L1051">1051</span>
<span id="LID1052" rel="#L1052">1052</span>
<span id="LID1053" rel="#L1053">1053</span>
<span id="LID1054" rel="#L1054">1054</span>
<span id="LID1055" rel="#L1055">1055</span>
<span id="LID1056" rel="#L1056">1056</span>
<span id="LID1057" rel="#L1057">1057</span>
<span id="LID1058" rel="#L1058">1058</span>
<span id="LID1059" rel="#L1059">1059</span>
<span id="LID1060" rel="#L1060">1060</span>
<span id="LID1061" rel="#L1061">1061</span>
<span id="LID1062" rel="#L1062">1062</span>
<span id="LID1063" rel="#L1063">1063</span>
<span id="LID1064" rel="#L1064">1064</span>
<span id="LID1065" rel="#L1065">1065</span>
<span id="LID1066" rel="#L1066">1066</span>
<span id="LID1067" rel="#L1067">1067</span>
<span id="LID1068" rel="#L1068">1068</span>
<span id="LID1069" rel="#L1069">1069</span>
<span id="LID1070" rel="#L1070">1070</span>
<span id="LID1071" rel="#L1071">1071</span>
<span id="LID1072" rel="#L1072">1072</span>
<span id="LID1073" rel="#L1073">1073</span>
<span id="LID1074" rel="#L1074">1074</span>
<span id="LID1075" rel="#L1075">1075</span>
<span id="LID1076" rel="#L1076">1076</span>
<span id="LID1077" rel="#L1077">1077</span>
<span id="LID1078" rel="#L1078">1078</span>
<span id="LID1079" rel="#L1079">1079</span>
<span id="LID1080" rel="#L1080">1080</span>
<span id="LID1081" rel="#L1081">1081</span>
<span id="LID1082" rel="#L1082">1082</span>
<span id="LID1083" rel="#L1083">1083</span>
<span id="LID1084" rel="#L1084">1084</span>
<span id="LID1085" rel="#L1085">1085</span>
<span id="LID1086" rel="#L1086">1086</span>
<span id="LID1087" rel="#L1087">1087</span>
<span id="LID1088" rel="#L1088">1088</span>
<span id="LID1089" rel="#L1089">1089</span>
<span id="LID1090" rel="#L1090">1090</span>
<span id="LID1091" rel="#L1091">1091</span>
<span id="LID1092" rel="#L1092">1092</span>
<span id="LID1093" rel="#L1093">1093</span>
<span id="LID1094" rel="#L1094">1094</span>
<span id="LID1095" rel="#L1095">1095</span>
<span id="LID1096" rel="#L1096">1096</span>
<span id="LID1097" rel="#L1097">1097</span>
<span id="LID1098" rel="#L1098">1098</span>
<span id="LID1099" rel="#L1099">1099</span>
<span id="LID1100" rel="#L1100">1100</span>
<span id="LID1101" rel="#L1101">1101</span>
<span id="LID1102" rel="#L1102">1102</span>
<span id="LID1103" rel="#L1103">1103</span>
<span id="LID1104" rel="#L1104">1104</span>
<span id="LID1105" rel="#L1105">1105</span>
<span id="LID1106" rel="#L1106">1106</span>
<span id="LID1107" rel="#L1107">1107</span>
<span id="LID1108" rel="#L1108">1108</span>
<span id="LID1109" rel="#L1109">1109</span>
<span id="LID1110" rel="#L1110">1110</span>
<span id="LID1111" rel="#L1111">1111</span>
<span id="LID1112" rel="#L1112">1112</span>
<span id="LID1113" rel="#L1113">1113</span>
<span id="LID1114" rel="#L1114">1114</span>
<span id="LID1115" rel="#L1115">1115</span>
<span id="LID1116" rel="#L1116">1116</span>
<span id="LID1117" rel="#L1117">1117</span>
<span id="LID1118" rel="#L1118">1118</span>
<span id="LID1119" rel="#L1119">1119</span>
<span id="LID1120" rel="#L1120">1120</span>
<span id="LID1121" rel="#L1121">1121</span>
<span id="LID1122" rel="#L1122">1122</span>
<span id="LID1123" rel="#L1123">1123</span>
<span id="LID1124" rel="#L1124">1124</span>
<span id="LID1125" rel="#L1125">1125</span>
<span id="LID1126" rel="#L1126">1126</span>
<span id="LID1127" rel="#L1127">1127</span>
<span id="LID1128" rel="#L1128">1128</span>
<span id="LID1129" rel="#L1129">1129</span>
<span id="LID1130" rel="#L1130">1130</span>
<span id="LID1131" rel="#L1131">1131</span>
<span id="LID1132" rel="#L1132">1132</span>
<span id="LID1133" rel="#L1133">1133</span>
<span id="LID1134" rel="#L1134">1134</span>
<span id="LID1135" rel="#L1135">1135</span>
<span id="LID1136" rel="#L1136">1136</span>
<span id="LID1137" rel="#L1137">1137</span>
<span id="LID1138" rel="#L1138">1138</span>
<span id="LID1139" rel="#L1139">1139</span>
</pre>
          </td>
          <td width="100%">
            
              <div class="highlight"><pre><div class='line' id='LC1'>/*</div><div class='line' id='LC2'>&nbsp;* QUnit - A JavaScript Unit Testing Framework</div><div class='line' id='LC3'>&nbsp;* </div><div class='line' id='LC4'>&nbsp;* http://docs.jquery.com/QUnit</div><div class='line' id='LC5'>&nbsp;*</div><div class='line' id='LC6'>&nbsp;* Copyright (c) 2009 John Resig, J�rn Zaefferer</div><div class='line' id='LC7'>&nbsp;* Dual licensed under the MIT (MIT-LICENSE.txt)</div><div class='line' id='LC8'>&nbsp;* and GPL (GPL-LICENSE.txt) licenses.</div><div class='line' id='LC9'>&nbsp;*/</div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>(function(window) {</div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>var QUnit = {</div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	// Initialize the configuration options</div><div class='line' id='LC16'>	init: function() {</div><div class='line' id='LC17'>		config = {</div><div class='line' id='LC18'>			stats: { all: 0, bad: 0 },</div><div class='line' id='LC19'>			moduleStats: { all: 0, bad: 0 },</div><div class='line' id='LC20'>			started: +new Date,</div><div class='line' id='LC21'>			blocking: false,</div><div class='line' id='LC22'>			autorun: false,</div><div class='line' id='LC23'>			assertions: [],</div><div class='line' id='LC24'>			filters: [],</div><div class='line' id='LC25'>			queue: []</div><div class='line' id='LC26'>		};</div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		var tests = id("qunit-tests"),</div><div class='line' id='LC29'>			banner = id("qunit-banner"),</div><div class='line' id='LC30'>			result = id("qunit-testresult");</div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>		if ( tests ) {</div><div class='line' id='LC33'>			tests.innerHTML = "";</div><div class='line' id='LC34'>		}</div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>		if ( banner ) {</div><div class='line' id='LC37'>			banner.className = "";</div><div class='line' id='LC38'>		}</div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		if ( result ) {</div><div class='line' id='LC41'>			result.parentNode.removeChild( result );</div><div class='line' id='LC42'>		}</div><div class='line' id='LC43'>	},</div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>	// call on start of module test to prepend name to all tests</div><div class='line' id='LC46'>	module: function(name, testEnvironment) {</div><div class='line' id='LC47'>		config.currentModule = name;</div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>		QUnit.currentModule = name;</div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		synchronize(function() {</div><div class='line' id='LC52'>			if ( config.currentModule ) {</div><div class='line' id='LC53'>				QUnit.moduleDone( config.currentModule, config.moduleStats.bad, config.moduleStats.all );</div><div class='line' id='LC54'>			}</div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			config.currentModule = name;</div><div class='line' id='LC57'>			config.moduleTestEnvironment = testEnvironment;</div><div class='line' id='LC58'>			config.moduleStats = { all: 0, bad: 0 };</div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>			QUnit.moduleStart( name, testEnvironment );</div><div class='line' id='LC61'>		});</div><div class='line' id='LC62'>	},</div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>	asyncTest: function(testName, expected, callback) {</div><div class='line' id='LC65'>		if ( arguments.length === 2 ) {</div><div class='line' id='LC66'>			callback = expected;</div><div class='line' id='LC67'>			expected = 0;</div><div class='line' id='LC68'>		}</div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>		QUnit.test(testName, expected, callback, true);</div><div class='line' id='LC71'>	},</div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	test: function(testName, expected, callback, async) {</div><div class='line' id='LC74'>		var name = testName, testEnvironment, testEnvironmentArg;</div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>		if ( arguments.length === 2 ) {</div><div class='line' id='LC77'>			callback = expected;</div><div class='line' id='LC78'>			expected = null;</div><div class='line' id='LC79'>		}</div><div class='line' id='LC80'>		// is 2nd argument a testEnvironment?</div><div class='line' id='LC81'>		if ( expected &amp;&amp; typeof expected === 'object') {</div><div class='line' id='LC82'>			testEnvironmentArg =  expected;</div><div class='line' id='LC83'>			expected = null;</div><div class='line' id='LC84'>		}</div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>		if ( config.currentModule ) {</div><div class='line' id='LC87'>			name = config.currentModule + " module: " + name;</div><div class='line' id='LC88'>		}</div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		if ( !validTest(name) ) {</div><div class='line' id='LC91'>			return;</div><div class='line' id='LC92'>		}</div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>		synchronize(function() {</div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>			QUnit.testStartTime = new Date().getTime();</div><div class='line' id='LC97'>			QUnit.testStart( testName );</div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>			testEnvironment = extend({</div><div class='line' id='LC100'>				setup: function() {},</div><div class='line' id='LC101'>				teardown: function() {}</div><div class='line' id='LC102'>			}, config.moduleTestEnvironment);</div><div class='line' id='LC103'>			if (testEnvironmentArg) {</div><div class='line' id='LC104'>				extend(testEnvironment,testEnvironmentArg);</div><div class='line' id='LC105'>			}</div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>			// allow utility functions to access the current test environment</div><div class='line' id='LC108'>			QUnit.current_testEnvironment = testEnvironment;</div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>			config.assertions = [];</div><div class='line' id='LC111'>			config.expected = expected;</div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>			try {</div><div class='line' id='LC114'>				if ( !config.pollution ) {</div><div class='line' id='LC115'>					saveGlobal();</div><div class='line' id='LC116'>				}</div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'>				testEnvironment.setup.call(testEnvironment);</div><div class='line' id='LC119'>			} catch(e) {</div><div class='line' id='LC120'>				QUnit.ok( false, "Setup failed on " + name + ": " + e.message );</div><div class='line' id='LC121'>			}</div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>			if ( async ) {</div><div class='line' id='LC124'>				QUnit.stop();</div><div class='line' id='LC125'>			}</div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>			try {</div><div class='line' id='LC128'>				callback.call(testEnvironment);</div><div class='line' id='LC129'>			} catch(e) {</div><div class='line' id='LC130'>				fail("Test " + name + " died, exception and test follows", e, callback);</div><div class='line' id='LC131'>				QUnit.ok( false, "Died on test #" + (config.assertions.length + 1) + ": " + e.message );</div><div class='line' id='LC132'>				// else next test will carry the responsibility</div><div class='line' id='LC133'>				saveGlobal();</div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>				// Restart the tests if they're blocking</div><div class='line' id='LC136'>				if ( config.blocking ) {</div><div class='line' id='LC137'>					start();</div><div class='line' id='LC138'>				}</div><div class='line' id='LC139'>			}</div><div class='line' id='LC140'>		});</div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'>		synchronize(function() {</div><div class='line' id='LC143'>			try {</div><div class='line' id='LC144'>				checkPollution();</div><div class='line' id='LC145'>				testEnvironment.teardown.call(testEnvironment);</div><div class='line' id='LC146'>			} catch(e) {</div><div class='line' id='LC147'>				QUnit.ok( false, "Teardown failed on " + name + ": " + e.message );</div><div class='line' id='LC148'>			}</div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>			try {</div><div class='line' id='LC151'>				QUnit.reset();</div><div class='line' id='LC152'>			} catch(e) {</div><div class='line' id='LC153'>				fail("reset() failed, following Test " + name + ", exception and reset fn follows", e, reset);</div><div class='line' id='LC154'>			}</div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>			if ( config.expected &amp;&amp; config.expected != config.assertions.length ) {</div><div class='line' id='LC157'>				QUnit.ok( false, "Expected " + config.expected + " assertions, but " + config.assertions.length + " were run" );</div><div class='line' id='LC158'>			}</div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>			var good = 0, bad = 0,</div><div class='line' id='LC161'>				tests = id("qunit-tests");</div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>			config.stats.all += config.assertions.length;</div><div class='line' id='LC164'>			config.moduleStats.all += config.assertions.length;</div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>			if ( tests ) {</div><div class='line' id='LC167'>				var ol  = document.createElement("ol");</div><div class='line' id='LC168'>				ol.style.display = "none";</div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>				for ( var i = 0; i &lt; config.assertions.length; i++ ) {</div><div class='line' id='LC171'>					var assertion = config.assertions[i];</div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>					var li = document.createElement("li");</div><div class='line' id='LC174'>					li.className = assertion.result ? "pass" : "fail";</div><div class='line' id='LC175'>					li.appendChild(document.createTextNode(assertion.message || "(no message)"));</div><div class='line' id='LC176'>					ol.appendChild( li );</div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>					if ( assertion.result ) {</div><div class='line' id='LC179'>						good++;</div><div class='line' id='LC180'>					} else {</div><div class='line' id='LC181'>						bad++;</div><div class='line' id='LC182'>						config.stats.bad++;</div><div class='line' id='LC183'>						config.moduleStats.bad++;</div><div class='line' id='LC184'>					}</div><div class='line' id='LC185'>				}</div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>				var b = document.createElement("strong");</div><div class='line' id='LC188'>				b.innerHTML = name + " &lt;b style='color:black;'&gt;(&lt;b class='fail'&gt;" + bad + "&lt;/b&gt;, &lt;b class='pass'&gt;" + good + "&lt;/b&gt;, " + config.assertions.length + ")&lt;/b&gt;";</div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>				addEvent(b, "click", function() {</div><div class='line' id='LC191'>					var next = b.nextSibling, display = next.style.display;</div><div class='line' id='LC192'>					next.style.display = display === "none" ? "block" : "none";</div><div class='line' id='LC193'>				});</div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>				addEvent(b, "dblclick", function(e) {</div><div class='line' id='LC196'>					var target = e &amp;&amp; e.target ? e.target : window.event.srcElement;</div><div class='line' id='LC197'>					if ( target.nodeName.toLowerCase() === "strong" ) {</div><div class='line' id='LC198'>						var text = "", node = target.firstChild;</div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>						while ( node.nodeType === 3 ) {</div><div class='line' id='LC201'>							text += node.nodeValue;</div><div class='line' id='LC202'>							node = node.nextSibling;</div><div class='line' id='LC203'>						}</div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>						text = text.replace(/(^\s*|\s*$)/g, "");</div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>						if ( window.location ) {</div><div class='line' id='LC208'>							window.location.href = window.location.href.match(/^(.+?)(\?.*)?$/)[1] + "?" + encodeURIComponent(text);</div><div class='line' id='LC209'>						}</div><div class='line' id='LC210'>					}</div><div class='line' id='LC211'>				});</div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>				var li = document.createElement("li");</div><div class='line' id='LC214'>				li.className = bad ? "fail" : "pass";</div><div class='line' id='LC215'>				li.appendChild( b );</div><div class='line' id='LC216'>				li.appendChild( ol );</div><div class='line' id='LC217'>				tests.appendChild( li );</div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>				if ( bad ) {</div><div class='line' id='LC220'>					var toolbar = id("qunit-testrunner-toolbar");</div><div class='line' id='LC221'>					if ( toolbar ) {</div><div class='line' id='LC222'>						toolbar.style.display = "block";</div><div class='line' id='LC223'>						id("qunit-filter-pass").disabled = null;</div><div class='line' id='LC224'>						id("qunit-filter-missing").disabled = null;</div><div class='line' id='LC225'>					}</div><div class='line' id='LC226'>				}</div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>			} else {</div><div class='line' id='LC229'>				for ( var i = 0; i &lt; config.assertions.length; i++ ) {</div><div class='line' id='LC230'>					if ( !config.assertions[i].result ) {</div><div class='line' id='LC231'>						bad++;</div><div class='line' id='LC232'>						config.stats.bad++;</div><div class='line' id='LC233'>						config.moduleStats.bad++;</div><div class='line' id='LC234'>					}</div><div class='line' id='LC235'>				}</div><div class='line' id='LC236'>			}</div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>			QUnit.addJSUnitFormResult( testName, bad );</div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>			QUnit.testDone( testName, bad, config.assertions.length );</div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>			if ( !window.setTimeout &amp;&amp; !config.queue.length ) {</div><div class='line' id='LC243'>				done();</div><div class='line' id='LC244'>			}</div><div class='line' id='LC245'>		});</div><div class='line' id='LC246'><br/></div><div class='line' id='LC247'>		if ( window.setTimeout &amp;&amp; !config.doneTimer ) {</div><div class='line' id='LC248'>			config.doneTimer = window.setTimeout(function(){</div><div class='line' id='LC249'>				if ( !config.queue.length ) {</div><div class='line' id='LC250'>					done();</div><div class='line' id='LC251'>				} else {</div><div class='line' id='LC252'>					synchronize( done );</div><div class='line' id='LC253'>				}</div><div class='line' id='LC254'>			}, 13);</div><div class='line' id='LC255'>		}</div><div class='line' id='LC256'>	},</div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>	/**</div><div class='line' id='LC259'>	 * Specify the number of expected assertions to gurantee that failed test (no assertions are run at all) don't slip through.</div><div class='line' id='LC260'>	 */</div><div class='line' id='LC261'>	expect: function(asserts) {</div><div class='line' id='LC262'>		config.expected = asserts;</div><div class='line' id='LC263'>	},</div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>	/**</div><div class='line' id='LC266'>	 * Asserts true.</div><div class='line' id='LC267'>	 * @example ok( "asdfasdf".length &gt; 5, "There must be at least 5 chars" );</div><div class='line' id='LC268'>	 */</div><div class='line' id='LC269'>	ok: function(a, msg) {</div><div class='line' id='LC270'>		QUnit.lastMessage = msg;</div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>		QUnit.log(a, msg);</div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>		config.assertions.push({</div><div class='line' id='LC275'>			result: !!a,</div><div class='line' id='LC276'>			message: msg</div><div class='line' id='LC277'>		});</div><div class='line' id='LC278'>	},</div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>	/**</div><div class='line' id='LC281'>	 * Checks that the first two arguments are equal, with an optional message.</div><div class='line' id='LC282'>	 * Prints out both actual and expected values.</div><div class='line' id='LC283'>	 *</div><div class='line' id='LC284'>	 * Prefered to ok( actual == expected, message )</div><div class='line' id='LC285'>	 *</div><div class='line' id='LC286'>	 * @example equal( format("Received {0} bytes.", 2), "Received 2 bytes." );</div><div class='line' id='LC287'>	 *</div><div class='line' id='LC288'>	 * @param Object actual</div><div class='line' id='LC289'>	 * @param Object expected</div><div class='line' id='LC290'>	 * @param String message (optional)</div><div class='line' id='LC291'>	 */</div><div class='line' id='LC292'>	equal: function(actual, expected, message) {</div><div class='line' id='LC293'>		push(expected == actual, actual, expected, message);</div><div class='line' id='LC294'>	},</div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>	notEqual: function(actual, expected, message) {</div><div class='line' id='LC297'>		push(expected != actual, actual, expected, message);</div><div class='line' id='LC298'>	},</div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>	deepEqual: function(a, b, message) {</div><div class='line' id='LC301'>		push(QUnit.equiv(a, b), a, b, message);</div><div class='line' id='LC302'>	},</div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>	notDeepEqual: function(a, b, message) {</div><div class='line' id='LC305'>		push(!QUnit.equiv(a, b), a, b, message);</div><div class='line' id='LC306'>	},</div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>	strictEqual: function(actual, expected, message) {</div><div class='line' id='LC309'>		push(expected === actual, actual, expected, message);</div><div class='line' id='LC310'>	},</div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>	notStrictEqual: function(actual, expected, message) {</div><div class='line' id='LC313'>		push(expected !== actual, actual, expected, message);</div><div class='line' id='LC314'>	},</div><div class='line' id='LC315'><br/></div><div class='line' id='LC316'>	start: function() {</div><div class='line' id='LC317'>		// A slight delay, to avoid any current callbacks</div><div class='line' id='LC318'>		if ( window.setTimeout ) {</div><div class='line' id='LC319'>			window.setTimeout(function() {</div><div class='line' id='LC320'>				if ( config.timeout ) {</div><div class='line' id='LC321'>					clearTimeout(config.timeout);</div><div class='line' id='LC322'>				}</div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>				config.blocking = false;</div><div class='line' id='LC325'>				process();</div><div class='line' id='LC326'>			}, 13);</div><div class='line' id='LC327'>		} else {</div><div class='line' id='LC328'>			config.blocking = false;</div><div class='line' id='LC329'>			process();</div><div class='line' id='LC330'>		}</div><div class='line' id='LC331'>	},</div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>	stop: function(timeout) {</div><div class='line' id='LC334'>		config.blocking = true;</div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>		if ( timeout &amp;&amp; window.setTimeout ) {</div><div class='line' id='LC337'>			config.timeout = window.setTimeout(function() {</div><div class='line' id='LC338'>				QUnit.ok( false, "Test timed out" );</div><div class='line' id='LC339'>				QUnit.start();</div><div class='line' id='LC340'>			}, timeout);</div><div class='line' id='LC341'>		}</div><div class='line' id='LC342'>	},</div><div class='line' id='LC343'><br/></div><div class='line' id='LC344'>	/**</div><div class='line' id='LC345'>	 * Resets the test setup. Useful for tests that modify the DOM.</div><div class='line' id='LC346'>	 */</div><div class='line' id='LC347'>	reset: function() {</div><div class='line' id='LC348'>		if ( window.jQuery ) {</div><div class='line' id='LC349'>			jQuery("#main").html( config.fixture );</div><div class='line' id='LC350'>			jQuery.event.global = {};</div><div class='line' id='LC351'>			jQuery.ajaxSettings = extend({}, config.ajaxSettings);</div><div class='line' id='LC352'>		}</div><div class='line' id='LC353'>	},</div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>	/**</div><div class='line' id='LC356'>	 * Trigger an event on an element.</div><div class='line' id='LC357'>	 *</div><div class='line' id='LC358'>	 * @example triggerEvent( document.body, "click" );</div><div class='line' id='LC359'>	 *</div><div class='line' id='LC360'>	 * @param DOMElement elem</div><div class='line' id='LC361'>	 * @param String type</div><div class='line' id='LC362'>	 */</div><div class='line' id='LC363'>	triggerEvent: function( elem, type, event ) {</div><div class='line' id='LC364'>		if ( document.createEvent ) {</div><div class='line' id='LC365'>			event = document.createEvent("MouseEvents");</div><div class='line' id='LC366'>			event.initMouseEvent(type, true, true, elem.ownerDocument.defaultView,</div><div class='line' id='LC367'>				0, 0, 0, 0, 0, false, false, false, false, 0, null);</div><div class='line' id='LC368'>			elem.dispatchEvent( event );</div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>		} else if ( elem.fireEvent ) {</div><div class='line' id='LC371'>			elem.fireEvent("on"+type);</div><div class='line' id='LC372'>		}</div><div class='line' id='LC373'>	},</div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'>	// Safe object type checking</div><div class='line' id='LC376'>	is: function( type, obj ) {</div><div class='line' id='LC377'>		return Object.prototype.toString.call( obj ) === "[object "+ type +"]";</div><div class='line' id='LC378'>	},</div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>	// Logging callbacks</div><div class='line' id='LC381'>	lastMessage: '',</div><div class='line' id='LC382'>	testStartTime: 0,</div><div class='line' id='LC383'>	testSuiteStart: new Date().getTime(),</div><div class='line' id='LC384'>	// The form used to submit the results back to JSUnit server</div><div class='line' id='LC385'>	submitForm: null,</div><div class='line' id='LC386'><br/></div><div class='line' id='LC387'>	done: function(failures, total) {},</div><div class='line' id='LC388'>	log: function(result, message) {},</div><div class='line' id='LC389'>	testStart: function(name) {},</div><div class='line' id='LC390'>	testDone: function(name, failures, total) {},</div><div class='line' id='LC391'>	moduleStart: function(name, testEnvironment) {},</div><div class='line' id='LC392'>	moduleDone: function(name, failures, total) {},</div><div class='line' id='LC393'><br/></div><div class='line' id='LC394'>	// Create the form that mimicks JSUnit</div><div class='line' id='LC395'>	createJSUnitForm: function() {</div><div class='line' id='LC396'>		QUnit.submitForm = document.getElementById('submitForm');</div><div class='line' id='LC397'>		if (QUnit.submitForm == null) {</div><div class='line' id='LC398'>			var f = QUnit.submitForm = document.createElement('form');</div><div class='line' id='LC399'>			f.id = 'submitForm';</div><div class='line' id='LC400'>			f.action = 'http://localhost:8889/jsunit/acceptor';</div><div class='line' id='LC401'>			f.method = 'POST';</div><div class='line' id='LC402'>			f.style.position = 'absolute';</div><div class='line' id='LC403'>			f.style.left = '-100000px';</div><div class='line' id='LC404'>			document.body.appendChild(f);</div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>			var i = document.createElement('input');</div><div class='line' id='LC407'>			i.name = i.id = 'id';</div><div class='line' id='LC408'>			f.appendChild(i);</div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'>			i = document.createElement('input');</div><div class='line' id='LC411'>			i.name = i.id = 'userAgent';</div><div class='line' id='LC412'>			i.value = navigator.userAgent;</div><div class='line' id='LC413'>			f.appendChild(i);</div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>			i = document.createElement('input');</div><div class='line' id='LC416'>			i.name = i.id = 'jsUnitVersion';</div><div class='line' id='LC417'>			i.value = '1.0'</div><div class='line' id='LC418'>			f.appendChild(i);</div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>			i = document.createElement('input');</div><div class='line' id='LC421'>			i.name = i.id = 'time';</div><div class='line' id='LC422'>			f.appendChild(i);</div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>			i = document.createElement('input');</div><div class='line' id='LC425'>			i.name = i.id = 'url';</div><div class='line' id='LC426'>			i.value = location.href;</div><div class='line' id='LC427'>			f.appendChild(i);</div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>			i = document.createElement('input');</div><div class='line' id='LC430'>			i.name = i.id = 'cacheBuster';</div><div class='line' id='LC431'>			f.appendChild(i);</div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'>			i = document.createElement('select');</div><div class='line' id='LC434'>			i.name = i.id = 'testCases';</div><div class='line' id='LC435'>			i.multiple = 'multiple';</div><div class='line' id='LC436'>			f.appendChild(i);</div><div class='line' id='LC437'>		}</div><div class='line' id='LC438'>		return QUnit.submitForm;</div><div class='line' id='LC439'>	},</div><div class='line' id='LC440'>	addJSUnitFormResult: function( testName, bad ) {</div><div class='line' id='LC441'>		if (QUnit.submitForm == null) {</div><div class='line' id='LC442'>			QUnit.createJSUnitForm();</div><div class='line' id='LC443'>		}</div><div class='line' id='LC444'>		var t = document.getElementById('testCases');</div><div class='line' id='LC445'>		var o = t.options[t.options.length] = document.createElement('option');</div><div class='line' id='LC446'>		o.value = o.innerHTML = QUnit.currentModule + ' :: ' + testName + '|' + (new Date().getTime() - QUnit.testStartTime) + '|' + (bad == 0 ? 'S' : 'E') + '|' + QUnit.lastMessage + '|';</div><div class='line' id='LC447'>		o.selected = true;</div><div class='line' id='LC448'>	}</div><div class='line' id='LC449'>};</div><div class='line' id='LC450'><br/></div><div class='line' id='LC451'>// Backwards compatibility, deprecated</div><div class='line' id='LC452'>QUnit.equals = QUnit.equal;</div><div class='line' id='LC453'>QUnit.different = QUnit.notEqual;</div><div class='line' id='LC454'>QUnit.same = QUnit.deepEqual;</div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>// Maintain internal state</div><div class='line' id='LC457'>var config = {</div><div class='line' id='LC458'>	// The queue of tests to run</div><div class='line' id='LC459'>	queue: [],</div><div class='line' id='LC460'><br/></div><div class='line' id='LC461'>	// block until document ready</div><div class='line' id='LC462'>	blocking: true</div><div class='line' id='LC463'>};</div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>// Load paramaters</div><div class='line' id='LC466'>(function() {</div><div class='line' id='LC467'>	var location = window.location || { search: "", protocol: "file:" },</div><div class='line' id='LC468'>		GETParams = location.search.slice(1).split('&amp;');</div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>	for ( var i = 0; i &lt; GETParams.length; i++ ) {</div><div class='line' id='LC471'>		GETParams[i] = decodeURIComponent( GETParams[i] );</div><div class='line' id='LC472'>		if ( GETParams[i] === "noglobals" ) {</div><div class='line' id='LC473'>			GETParams.splice( i, 1 );</div><div class='line' id='LC474'>			i--;</div><div class='line' id='LC475'>			config.noglobals = true;</div><div class='line' id='LC476'>		} else if ( GETParams[i].search('=') &gt; -1 ) {</div><div class='line' id='LC477'>			GETParams.splice( i, 1 );</div><div class='line' id='LC478'>			i--;</div><div class='line' id='LC479'>		}</div><div class='line' id='LC480'>	}</div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>	// restrict modules/tests by get parameters</div><div class='line' id='LC483'>	config.filters = GETParams;</div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>	// Figure out if we're running the tests from a server or not</div><div class='line' id='LC486'>	QUnit.isLocal = !!(location.protocol === 'file:');</div><div class='line' id='LC487'>})();</div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'>// Expose the API as global variables, unless an 'exports'</div><div class='line' id='LC490'>// object exists, in that case we assume we're in CommonJS</div><div class='line' id='LC491'>if ( typeof exports === "undefined" || typeof require === "undefined" ) {</div><div class='line' id='LC492'>	extend(window, QUnit);</div><div class='line' id='LC493'>	window.QUnit = QUnit;</div><div class='line' id='LC494'>} else {</div><div class='line' id='LC495'>	extend(exports, QUnit);</div><div class='line' id='LC496'>	exports.QUnit = QUnit;</div><div class='line' id='LC497'>}</div><div class='line' id='LC498'><br/></div><div class='line' id='LC499'>if ( typeof document === "undefined" || document.readyState === "complete" ) {</div><div class='line' id='LC500'>	config.autorun = true;</div><div class='line' id='LC501'>}</div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>addEvent(window, "load", function() {</div><div class='line' id='LC504'>	// Initialize the config, saving the execution queue</div><div class='line' id='LC505'>	var oldconfig = extend({}, config);</div><div class='line' id='LC506'>	QUnit.init();</div><div class='line' id='LC507'>	extend(config, oldconfig);</div><div class='line' id='LC508'><br/></div><div class='line' id='LC509'>	config.blocking = false;</div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>	var userAgent = id("qunit-userAgent");</div><div class='line' id='LC512'>	if ( userAgent ) {</div><div class='line' id='LC513'>		userAgent.innerHTML = navigator.userAgent;</div><div class='line' id='LC514'>	}</div><div class='line' id='LC515'><br/></div><div class='line' id='LC516'>	var toolbar = id("qunit-testrunner-toolbar");</div><div class='line' id='LC517'>	if ( toolbar ) {</div><div class='line' id='LC518'>		toolbar.style.display = "none";</div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>		var filter = document.createElement("input");</div><div class='line' id='LC521'>		filter.type = "checkbox";</div><div class='line' id='LC522'>		filter.id = "qunit-filter-pass";</div><div class='line' id='LC523'>		filter.disabled = true;</div><div class='line' id='LC524'>		addEvent( filter, "click", function() {</div><div class='line' id='LC525'>			var li = document.getElementsByTagName("li");</div><div class='line' id='LC526'>			for ( var i = 0; i &lt; li.length; i++ ) {</div><div class='line' id='LC527'>				if ( li[i].className.indexOf("pass") &gt; -1 ) {</div><div class='line' id='LC528'>					li[i].style.display = filter.checked ? "none" : "";</div><div class='line' id='LC529'>				}</div><div class='line' id='LC530'>			}</div><div class='line' id='LC531'>		});</div><div class='line' id='LC532'>		toolbar.appendChild( filter );</div><div class='line' id='LC533'><br/></div><div class='line' id='LC534'>		var label = document.createElement("label");</div><div class='line' id='LC535'>		label.setAttribute("for", "qunit-filter-pass");</div><div class='line' id='LC536'>		label.innerHTML = "Hide passed tests";</div><div class='line' id='LC537'>		toolbar.appendChild( label );</div><div class='line' id='LC538'><br/></div><div class='line' id='LC539'>		var missing = document.createElement("input");</div><div class='line' id='LC540'>		missing.type = "checkbox";</div><div class='line' id='LC541'>		missing.id = "qunit-filter-missing";</div><div class='line' id='LC542'>		missing.disabled = true;</div><div class='line' id='LC543'>		addEvent( missing, "click", function() {</div><div class='line' id='LC544'>			var li = document.getElementsByTagName("li");</div><div class='line' id='LC545'>			for ( var i = 0; i &lt; li.length; i++ ) {</div><div class='line' id='LC546'>				if ( li[i].className.indexOf("fail") &gt; -1 &amp;&amp; li[i].innerHTML.indexOf('missing test - untested code is broken code') &gt; - 1 ) {</div><div class='line' id='LC547'>					li[i].parentNode.parentNode.style.display = missing.checked ? "none" : "block";</div><div class='line' id='LC548'>				}</div><div class='line' id='LC549'>			}</div><div class='line' id='LC550'>		});</div><div class='line' id='LC551'>		toolbar.appendChild( missing );</div><div class='line' id='LC552'><br/></div><div class='line' id='LC553'>		label = document.createElement("label");</div><div class='line' id='LC554'>		label.setAttribute("for", "qunit-filter-missing");</div><div class='line' id='LC555'>		label.innerHTML = "Hide missing tests (untested code is broken code)";</div><div class='line' id='LC556'>		toolbar.appendChild( label );</div><div class='line' id='LC557'>	}</div><div class='line' id='LC558'><br/></div><div class='line' id='LC559'>	var main = id('main');</div><div class='line' id='LC560'>	if ( main ) {</div><div class='line' id='LC561'>		config.fixture = main.innerHTML;</div><div class='line' id='LC562'>	}</div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>	if ( window.jQuery ) {</div><div class='line' id='LC565'>		config.ajaxSettings = window.jQuery.ajaxSettings;</div><div class='line' id='LC566'>	}</div><div class='line' id='LC567'><br/></div><div class='line' id='LC568'>	QUnit.start();</div><div class='line' id='LC569'>});</div><div class='line' id='LC570'><br/></div><div class='line' id='LC571'>function done() {</div><div class='line' id='LC572'>	if ( config.doneTimer &amp;&amp; window.clearTimeout ) {</div><div class='line' id='LC573'>		window.clearTimeout( config.doneTimer );</div><div class='line' id='LC574'>		config.doneTimer = null;</div><div class='line' id='LC575'>	}</div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'>	if ( config.queue.length ) {</div><div class='line' id='LC578'>		config.doneTimer = window.setTimeout(function(){</div><div class='line' id='LC579'>			if ( !config.queue.length ) {</div><div class='line' id='LC580'>				done();</div><div class='line' id='LC581'>			} else {</div><div class='line' id='LC582'>				synchronize( done );</div><div class='line' id='LC583'>			}</div><div class='line' id='LC584'>		}, 13);</div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>		return;</div><div class='line' id='LC587'>	}</div><div class='line' id='LC588'><br/></div><div class='line' id='LC589'>	config.autorun = true;</div><div class='line' id='LC590'><br/></div><div class='line' id='LC591'>	// Log the last module results</div><div class='line' id='LC592'>	if ( config.currentModule ) {</div><div class='line' id='LC593'>		QUnit.moduleDone( config.currentModule, config.moduleStats.bad, config.moduleStats.all );</div><div class='line' id='LC594'>	}</div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>	var banner = id("qunit-banner"),</div><div class='line' id='LC597'>		tests = id("qunit-tests"),</div><div class='line' id='LC598'>		html = ['Tests completed in ',</div><div class='line' id='LC599'>		+new Date - config.started, ' milliseconds.&lt;br/&gt;',</div><div class='line' id='LC600'>		'&lt;span class="passed"&gt;', config.stats.all - config.stats.bad, '&lt;/span&gt; tests of &lt;span class="total"&gt;', config.stats.all, '&lt;/span&gt; passed, &lt;span class="failed"&gt;', config.stats.bad,'&lt;/span&gt; failed.'].join('');</div><div class='line' id='LC601'><br/></div><div class='line' id='LC602'>	if ( banner ) {</div><div class='line' id='LC603'>		banner.className = (config.stats.bad ? "qunit-fail" : "qunit-pass");</div><div class='line' id='LC604'>	}</div><div class='line' id='LC605'><br/></div><div class='line' id='LC606'>	if ( tests ) {	</div><div class='line' id='LC607'>		var result = id("qunit-testresult");</div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'>		if ( !result ) {</div><div class='line' id='LC610'>			result = document.createElement("p");</div><div class='line' id='LC611'>			result.id = "qunit-testresult";</div><div class='line' id='LC612'>			result.className = "result";</div><div class='line' id='LC613'>			tests.parentNode.insertBefore( result, tests.nextSibling );</div><div class='line' id='LC614'>		}</div><div class='line' id='LC615'><br/></div><div class='line' id='LC616'>		result.innerHTML = html;</div><div class='line' id='LC617'>	}</div><div class='line' id='LC618'><br/></div><div class='line' id='LC619'>	QUnit.done( config.stats.bad, config.stats.all );</div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>	document.getElementById('time').value = (new Date().getTime() - QUnit.testSuiteStart);</div><div class='line' id='LC622'>	if (location.href.indexOf('submitresults=true') &gt; 0) {</div><div class='line' id='LC623'>		QUnit.submitForm.submit();</div><div class='line' id='LC624'>	}</div><div class='line' id='LC625'>}</div><div class='line' id='LC626'><br/></div><div class='line' id='LC627'>function validTest( name ) {</div><div class='line' id='LC628'>	var i = config.filters.length,</div><div class='line' id='LC629'>		run = false;</div><div class='line' id='LC630'><br/></div><div class='line' id='LC631'>	if ( !i ) {</div><div class='line' id='LC632'>		return true;</div><div class='line' id='LC633'>	}</div><div class='line' id='LC634'><br/></div><div class='line' id='LC635'>	while ( i-- ) {</div><div class='line' id='LC636'>		var filter = config.filters[i],</div><div class='line' id='LC637'>			not = filter.charAt(0) == '!';</div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>		if ( not ) {</div><div class='line' id='LC640'>			filter = filter.slice(1);</div><div class='line' id='LC641'>		}</div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>		if ( name.indexOf(filter) !== -1 ) {</div><div class='line' id='LC644'>			return !not;</div><div class='line' id='LC645'>		}</div><div class='line' id='LC646'><br/></div><div class='line' id='LC647'>		if ( not ) {</div><div class='line' id='LC648'>			run = true;</div><div class='line' id='LC649'>		}</div><div class='line' id='LC650'>	}</div><div class='line' id='LC651'><br/></div><div class='line' id='LC652'>	return run;</div><div class='line' id='LC653'>}</div><div class='line' id='LC654'><br/></div><div class='line' id='LC655'>function push(result, actual, expected, message) {</div><div class='line' id='LC656'>	message = message || (result ? "okay" : "failed");</div><div class='line' id='LC657'>	QUnit.ok( result, result ? message + ": " + expected : message + ", expected: " + QUnit.jsDump.parse(expected) + " result: " + QUnit.jsDump.parse(actual) );</div><div class='line' id='LC658'>}</div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'>function synchronize( callback ) {</div><div class='line' id='LC661'>	config.queue.push( callback );</div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'>	if ( config.autorun &amp;&amp; !config.blocking ) {</div><div class='line' id='LC664'>		process();</div><div class='line' id='LC665'>	}</div><div class='line' id='LC666'>}</div><div class='line' id='LC667'><br/></div><div class='line' id='LC668'>function process() {</div><div class='line' id='LC669'>	while ( config.queue.length &amp;&amp; !config.blocking ) {</div><div class='line' id='LC670'>		config.queue.shift()();</div><div class='line' id='LC671'>	}</div><div class='line' id='LC672'>}</div><div class='line' id='LC673'><br/></div><div class='line' id='LC674'>function saveGlobal() {</div><div class='line' id='LC675'>	config.pollution = [];</div><div class='line' id='LC676'><br/></div><div class='line' id='LC677'>	if ( config.noglobals ) {</div><div class='line' id='LC678'>		for ( var key in window ) {</div><div class='line' id='LC679'>			config.pollution.push( key );</div><div class='line' id='LC680'>		}</div><div class='line' id='LC681'>	}</div><div class='line' id='LC682'>}</div><div class='line' id='LC683'><br/></div><div class='line' id='LC684'>function checkPollution( name ) {</div><div class='line' id='LC685'>	var old = config.pollution;</div><div class='line' id='LC686'>	saveGlobal();</div><div class='line' id='LC687'><br/></div><div class='line' id='LC688'>	var newGlobals = diff( old, config.pollution );</div><div class='line' id='LC689'>	if ( newGlobals.length &gt; 0 ) {</div><div class='line' id='LC690'>		ok( false, "Introduced global variable(s): " + newGlobals.join(", ") );</div><div class='line' id='LC691'>		config.expected++;</div><div class='line' id='LC692'>	}</div><div class='line' id='LC693'><br/></div><div class='line' id='LC694'>	var deletedGlobals = diff( config.pollution, old );</div><div class='line' id='LC695'>	if ( deletedGlobals.length &gt; 0 ) {</div><div class='line' id='LC696'>		ok( false, "Deleted global variable(s): " + deletedGlobals.join(", ") );</div><div class='line' id='LC697'>		config.expected++;</div><div class='line' id='LC698'>	}</div><div class='line' id='LC699'>}</div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'>// returns a new Array with the elements that are in a but not in b</div><div class='line' id='LC702'>function diff( a, b ) {</div><div class='line' id='LC703'>	var result = a.slice();</div><div class='line' id='LC704'>	for ( var i = 0; i &lt; result.length; i++ ) {</div><div class='line' id='LC705'>		for ( var j = 0; j &lt; b.length; j++ ) {</div><div class='line' id='LC706'>			if ( result[i] === b[j] ) {</div><div class='line' id='LC707'>				result.splice(i, 1);</div><div class='line' id='LC708'>				i--;</div><div class='line' id='LC709'>				break;</div><div class='line' id='LC710'>			}</div><div class='line' id='LC711'>		}</div><div class='line' id='LC712'>	}</div><div class='line' id='LC713'>	return result;</div><div class='line' id='LC714'>}</div><div class='line' id='LC715'><br/></div><div class='line' id='LC716'>function fail(message, exception, callback) {</div><div class='line' id='LC717'>	if ( typeof console !== "undefined" &amp;&amp; console.error &amp;&amp; console.warn ) {</div><div class='line' id='LC718'>		console.error(message);</div><div class='line' id='LC719'>		console.error(exception);</div><div class='line' id='LC720'>		console.warn(callback.toString());</div><div class='line' id='LC721'><br/></div><div class='line' id='LC722'>	} else if ( window.opera &amp;&amp; opera.postError ) {</div><div class='line' id='LC723'>		opera.postError(message, exception, callback.toString);</div><div class='line' id='LC724'>	}</div><div class='line' id='LC725'>}</div><div class='line' id='LC726'><br/></div><div class='line' id='LC727'>function extend(a, b) {</div><div class='line' id='LC728'>	for ( var prop in b ) {</div><div class='line' id='LC729'>		a[prop] = b[prop];</div><div class='line' id='LC730'>	}</div><div class='line' id='LC731'><br/></div><div class='line' id='LC732'>	return a;</div><div class='line' id='LC733'>}</div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>function addEvent(elem, type, fn) {</div><div class='line' id='LC736'>	if ( elem.addEventListener ) {</div><div class='line' id='LC737'>		elem.addEventListener( type, fn, false );</div><div class='line' id='LC738'>	} else if ( elem.attachEvent ) {</div><div class='line' id='LC739'>		elem.attachEvent( "on" + type, fn );</div><div class='line' id='LC740'>	} else {</div><div class='line' id='LC741'>		fn();</div><div class='line' id='LC742'>	}</div><div class='line' id='LC743'>}</div><div class='line' id='LC744'><br/></div><div class='line' id='LC745'>function id(name) {</div><div class='line' id='LC746'>	return !!(typeof document !== "undefined" &amp;&amp; document &amp;&amp; document.getElementById) &amp;&amp;</div><div class='line' id='LC747'>		document.getElementById( name );</div><div class='line' id='LC748'>}</div><div class='line' id='LC749'><br/></div><div class='line' id='LC750'>// Test for equality any JavaScript type.</div><div class='line' id='LC751'>// Discussions and reference: http://philrathe.com/articles/equiv</div><div class='line' id='LC752'>// Test suites: http://philrathe.com/tests/equiv</div><div class='line' id='LC753'>// Author: Philippe Rath� &lt;prathe@gmail.com&gt;</div><div class='line' id='LC754'>QUnit.equiv = function () {</div><div class='line' id='LC755'><br/></div><div class='line' id='LC756'>&nbsp;&nbsp;&nbsp;&nbsp;var innerEquiv; // the real equiv function</div><div class='line' id='LC757'>&nbsp;&nbsp;&nbsp;&nbsp;var callers = []; // stack to decide between skip/abort functions</div><div class='line' id='LC758'><br/></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'>&nbsp;&nbsp;&nbsp;&nbsp;// Determine what is o.</div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;function hoozit(o) {</div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (QUnit.is("String", o)) {</div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "string";</div><div class='line' id='LC764'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is("Boolean", o)) {</div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "boolean";</div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is("Number", o)) {</div><div class='line' id='LC769'><br/></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (isNaN(o)) {</div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "nan";</div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "number";</div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC775'><br/></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (typeof o === "undefined") {</div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "undefined";</div><div class='line' id='LC778'><br/></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// consider: typeof null === object</div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (o === null) {</div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "null";</div><div class='line' id='LC782'><br/></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// consider: typeof [] === object</div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is( "Array", o)) {</div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "array";</div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// consider: typeof new Date() === object</div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is( "Date", o)) {</div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "date";</div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// consider: /./ instanceof Object;</div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//           /./ instanceof RegExp;</div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//          typeof /./ === "function"; // =&gt; false in IE and Opera,</div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//                                          true in FF and Safari</div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is( "RegExp", o)) {</div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "regexp";</div><div class='line' id='LC797'><br/></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (typeof o === "object") {</div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "object";</div><div class='line' id='LC800'><br/></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (QUnit.is( "Function", o)) {</div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "function";</div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return undefined;</div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC807'><br/></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;// Call the o related callback with the given arguments.</div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;function bindCallbacks(o, callbacks, args) {</div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var prop = hoozit(o);</div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (prop) {</div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (hoozit(callbacks[prop]) === "function") {</div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return callbacks[prop].apply(callbacks, args);</div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return callbacks[prop]; // or undefined</div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;var callbacks = function () {</div><div class='line' id='LC821'><br/></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// for string, boolean, number and null</div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function useStrictEquality(b, a) {</div><div class='line' id='LC824'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (b instanceof a.constructor || a instanceof b.constructor) {</div><div class='line' id='LC825'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to catch short annotaion VS 'new' annotation of a declaration</div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// e.g. var i = 1;</div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//      var j = new Number(1);</div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a == b;</div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a === b;</div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC833'><br/></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return {</div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"string": useStrictEquality,</div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"boolean": useStrictEquality,</div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"number": useStrictEquality,</div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"null": useStrictEquality,</div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"undefined": useStrictEquality,</div><div class='line' id='LC840'><br/></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"nan": function (b) {</div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return isNaN(b);</div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line' id='LC844'><br/></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"date": function (b, a) {</div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return hoozit(b) === "date" &amp;&amp; a.valueOf() === b.valueOf();</div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line' id='LC848'><br/></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"regexp": function (b, a) {</div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return hoozit(b) === "regexp" &amp;&amp;</div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.source === b.source &amp;&amp; // the regex itself</div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.global === b.global &amp;&amp; // and its modifers (gmi) ...</div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.ignoreCase === b.ignoreCase &amp;&amp;</div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.multiline === b.multiline;</div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line' id='LC856'><br/></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// - skip when the property is a method of an instance (OOP)</div><div class='line' id='LC858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// - abort otherwise,</div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//   initial === would have catch identical references anyway</div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"function": function () {</div><div class='line' id='LC861'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var caller = callers[callers.length - 1];</div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return caller !== Object &amp;&amp;</div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;typeof caller !== "undefined";</div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line' id='LC865'><br/></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"array": function (b, a) {</div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var i;</div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var len;</div><div class='line' id='LC869'><br/></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// b could be an object literal here</div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ( ! (hoozit(b) === "array")) {</div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC874'><br/></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;len = a.length;</div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (len !== b.length) { // safe and faster</div><div class='line' id='LC877'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</div><div class='line' id='LC878'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC879'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (i = 0; i &lt; len; i++) {</div><div class='line' id='LC880'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ( ! innerEquiv(a[i], b[i])) {</div><div class='line' id='LC881'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</div><div class='line' id='LC882'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC883'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC884'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;</div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</div><div class='line' id='LC886'><br/></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"object": function (b, a) {</div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var i;</div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var eq = true; // unless we can proove it</div><div class='line' id='LC890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var aProperties = [], bProperties = []; // collection of strings</div><div class='line' id='LC891'><br/></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// comparing constructors is more strict than using instanceof</div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ( a.constructor !== b.constructor) {</div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;</div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC896'><br/></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// stack constructor before traversing properties</div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callers.push(a.constructor);</div><div class='line' id='LC899'><br/></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (i in a) { // be strict: don't ensures hasOwnProperty and go deep</div><div class='line' id='LC901'><br/></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aProperties.push(i); // collect a's properties</div><div class='line' id='LC903'><br/></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if ( ! innerEquiv(a[i], b[i])) {</div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eq = false;</div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC908'><br/></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callers.pop(); // unstack, we are done</div><div class='line' id='LC910'><br/></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (i in b) {</div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bProperties.push(i); // collect b's properties</div><div class='line' id='LC913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC914'><br/></div><div class='line' id='LC915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Ensures identical properties name</div><div class='line' id='LC916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return eq &amp;&amp; innerEquiv(aProperties.sort(), bProperties.sort());</div><div class='line' id='LC917'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</div><div class='line' id='LC919'>&nbsp;&nbsp;&nbsp;&nbsp;}();</div><div class='line' id='LC920'><br/></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;innerEquiv = function () { // can take multiple arguments</div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var args = Array.prototype.slice.apply(arguments);</div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (args.length &lt; 2) {</div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true; // end transition</div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC926'><br/></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (function (a, b) {</div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (a === b) {</div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true; // catch the most you can</div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else if (a === null || b === null || typeof a === "undefined" || typeof b === "undefined" || hoozit(a) !== hoozit(b)) {</div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false; // don't lose time with error prone cases</div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {</div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return bindCallbacks(a, callbacks, [b, a]);</div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line' id='LC935'><br/></div><div class='line' id='LC936'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// apply transition with (1..n) arguments</div><div class='line' id='LC937'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})(args[0], args[1]) &amp;&amp; arguments.callee.apply(this, args.splice(1, args.length -1));</div><div class='line' id='LC938'>&nbsp;&nbsp;&nbsp;&nbsp;};</div><div class='line' id='LC939'><br/></div><div class='line' id='LC940'>&nbsp;&nbsp;&nbsp;&nbsp;return innerEquiv;</div><div class='line' id='LC941'><br/></div><div class='line' id='LC942'>}();</div><div class='line' id='LC943'><br/></div><div class='line' id='LC944'>/**</div><div class='line' id='LC945'>&nbsp;* jsDump</div><div class='line' id='LC946'>&nbsp;* Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com</div><div class='line' id='LC947'>&nbsp;* Licensed under BSD (http://www.opensource.org/licenses/bsd-license.php)</div><div class='line' id='LC948'>&nbsp;* Date: 5/15/2008</div><div class='line' id='LC949'>&nbsp;* @projectDescription Advanced and extensible data dumping for Javascript.</div><div class='line' id='LC950'>&nbsp;* @version 1.0.0</div><div class='line' id='LC951'>&nbsp;* @author Ariel Flesler</div><div class='line' id='LC952'>&nbsp;* @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}</div><div class='line' id='LC953'>&nbsp;*/</div><div class='line' id='LC954'>QUnit.jsDump = (function() {</div><div class='line' id='LC955'>	function quote( str ) {</div><div class='line' id='LC956'>		return '"' + str.toString().replace(/"/g, '\\"') + '"';</div><div class='line' id='LC957'>	};</div><div class='line' id='LC958'>	function literal( o ) {</div><div class='line' id='LC959'>		return o + '';	</div><div class='line' id='LC960'>	};</div><div class='line' id='LC961'>	function join( pre, arr, post ) {</div><div class='line' id='LC962'>		var s = jsDump.separator(),</div><div class='line' id='LC963'>			base = jsDump.indent(),</div><div class='line' id='LC964'>			inner = jsDump.indent(1);</div><div class='line' id='LC965'>		if ( arr.join )</div><div class='line' id='LC966'>			arr = arr.join( ',' + s + inner );</div><div class='line' id='LC967'>		if ( !arr )</div><div class='line' id='LC968'>			return pre + post;</div><div class='line' id='LC969'>		return [ pre, inner + arr, base + post ].join(s);</div><div class='line' id='LC970'>	};</div><div class='line' id='LC971'>	function array( arr ) {</div><div class='line' id='LC972'>		var i = arr.length,	ret = Array(i);					</div><div class='line' id='LC973'>		this.up();</div><div class='line' id='LC974'>		while ( i-- )</div><div class='line' id='LC975'>			ret[i] = this.parse( arr[i] );				</div><div class='line' id='LC976'>		this.down();</div><div class='line' id='LC977'>		return join( '[', ret, ']' );</div><div class='line' id='LC978'>	};</div><div class='line' id='LC979'><br/></div><div class='line' id='LC980'>	var reName = /^function (\w+)/;</div><div class='line' id='LC981'><br/></div><div class='line' id='LC982'>	var jsDump = {</div><div class='line' id='LC983'>		parse:function( obj, type ) { //type is used mostly internally, you can fix a (custom)type in advance</div><div class='line' id='LC984'>			var	parser = this.parsers[ type || this.typeOf(obj) ];</div><div class='line' id='LC985'>			type = typeof parser;			</div><div class='line' id='LC986'><br/></div><div class='line' id='LC987'>			return type == 'function' ? parser.call( this, obj ) :</div><div class='line' id='LC988'>				   type == 'string' ? parser :</div><div class='line' id='LC989'>				   this.parsers.error;</div><div class='line' id='LC990'>		},</div><div class='line' id='LC991'>		typeOf:function( obj ) {</div><div class='line' id='LC992'>			var type;</div><div class='line' id='LC993'>			if ( obj === null ) {</div><div class='line' id='LC994'>				type = "null";</div><div class='line' id='LC995'>			} else if (typeof obj === "undefined") {</div><div class='line' id='LC996'>				type = "undefined";</div><div class='line' id='LC997'>			} else if (QUnit.is("RegExp", obj)) {</div><div class='line' id='LC998'>				type = "regexp";</div><div class='line' id='LC999'>			} else if (QUnit.is("Date", obj)) {</div><div class='line' id='LC1000'>				type = "date";</div><div class='line' id='LC1001'>			} else if (QUnit.is("Function", obj)) {</div><div class='line' id='LC1002'>				type = "function";</div><div class='line' id='LC1003'>			} else if (QUnit.is("Array", obj)) {</div><div class='line' id='LC1004'>				type = "array";</div><div class='line' id='LC1005'>			} else if (QUnit.is("Window", obj) || QUnit.is("global", obj)) {</div><div class='line' id='LC1006'>				type = "window";</div><div class='line' id='LC1007'>			} else if (QUnit.is("HTMLDocument", obj)) {</div><div class='line' id='LC1008'>				type = "document";</div><div class='line' id='LC1009'>			} else if (QUnit.is("HTMLCollection", obj) || QUnit.is("NodeList", obj)) {</div><div class='line' id='LC1010'>				type = "nodelist";</div><div class='line' id='LC1011'>			} else if (/^\[object HTML/.test(Object.prototype.toString.call( obj ))) {</div><div class='line' id='LC1012'>				type = "node";</div><div class='line' id='LC1013'>			} else {</div><div class='line' id='LC1014'>				type = typeof obj;</div><div class='line' id='LC1015'>			}</div><div class='line' id='LC1016'>			return type;</div><div class='line' id='LC1017'>		},</div><div class='line' id='LC1018'>		separator:function() {</div><div class='line' id='LC1019'>			return this.multiline ?	this.HTML ? '&lt;br /&gt;' : '\n' : this.HTML ? '&amp;nbsp;' : ' ';</div><div class='line' id='LC1020'>		},</div><div class='line' id='LC1021'>		indent:function( extra ) {// extra can be a number, shortcut for increasing-calling-decreasing</div><div class='line' id='LC1022'>			if ( !this.multiline )</div><div class='line' id='LC1023'>				return '';</div><div class='line' id='LC1024'>			var chr = this.indentChar;</div><div class='line' id='LC1025'>			if ( this.HTML )</div><div class='line' id='LC1026'>				chr = chr.replace(/\t/g,'   ').replace(/ /g,'&amp;nbsp;');</div><div class='line' id='LC1027'>			return Array( this._depth_ + (extra||0) ).join(chr);</div><div class='line' id='LC1028'>		},</div><div class='line' id='LC1029'>		up:function( a ) {</div><div class='line' id='LC1030'>			this._depth_ += a || 1;</div><div class='line' id='LC1031'>		},</div><div class='line' id='LC1032'>		down:function( a ) {</div><div class='line' id='LC1033'>			this._depth_ -= a || 1;</div><div class='line' id='LC1034'>		},</div><div class='line' id='LC1035'>		setParser:function( name, parser ) {</div><div class='line' id='LC1036'>			this.parsers[name] = parser;</div><div class='line' id='LC1037'>		},</div><div class='line' id='LC1038'>		// The next 3 are exposed so you can use them</div><div class='line' id='LC1039'>		quote:quote, </div><div class='line' id='LC1040'>		literal:literal,</div><div class='line' id='LC1041'>		join:join,</div><div class='line' id='LC1042'>		//</div><div class='line' id='LC1043'>		_depth_: 1,</div><div class='line' id='LC1044'>		// This is the list of parsers, to modify them, use jsDump.setParser</div><div class='line' id='LC1045'>		parsers:{</div><div class='line' id='LC1046'>			window: '[Window]',</div><div class='line' id='LC1047'>			document: '[Document]',</div><div class='line' id='LC1048'>			error:'[ERROR]', //when no parser is found, shouldn't happen</div><div class='line' id='LC1049'>			unknown: '[Unknown]',</div><div class='line' id='LC1050'>			'null':'null',</div><div class='line' id='LC1051'>			undefined:'undefined',</div><div class='line' id='LC1052'>			'function':function( fn ) {</div><div class='line' id='LC1053'>				var ret = 'function',</div><div class='line' id='LC1054'>					name = 'name' in fn ? fn.name : (reName.exec(fn)||[])[1];//functions never have name in IE</div><div class='line' id='LC1055'>				if ( name )</div><div class='line' id='LC1056'>					ret += ' ' + name;</div><div class='line' id='LC1057'>				ret += '(';</div><div class='line' id='LC1058'><br/></div><div class='line' id='LC1059'>				ret = [ ret, this.parse( fn, 'functionArgs' ), '){'].join('');</div><div class='line' id='LC1060'>				return join( ret, this.parse(fn,'functionCode'), '}' );</div><div class='line' id='LC1061'>			},</div><div class='line' id='LC1062'>			array: array,</div><div class='line' id='LC1063'>			nodelist: array,</div><div class='line' id='LC1064'>			arguments: array,</div><div class='line' id='LC1065'>			object:function( map ) {</div><div class='line' id='LC1066'>				var ret = [ ];</div><div class='line' id='LC1067'>				this.up();</div><div class='line' id='LC1068'>				for ( var key in map )</div><div class='line' id='LC1069'>					ret.push( this.parse(key,'key') + ': ' + this.parse(map[key]) );</div><div class='line' id='LC1070'>				this.down();</div><div class='line' id='LC1071'>				return join( '{', ret, '}' );</div><div class='line' id='LC1072'>			},</div><div class='line' id='LC1073'>			node:function( node ) {</div><div class='line' id='LC1074'>				var open = this.HTML ? '&amp;lt;' : '&lt;',</div><div class='line' id='LC1075'>					close = this.HTML ? '&amp;gt;' : '&gt;';</div><div class='line' id='LC1076'><br/></div><div class='line' id='LC1077'>				var tag = node.nodeName.toLowerCase(),</div><div class='line' id='LC1078'>					ret = open + tag;</div><div class='line' id='LC1079'><br/></div><div class='line' id='LC1080'>				for ( var a in this.DOMAttrs ) {</div><div class='line' id='LC1081'>					var val = node[this.DOMAttrs[a]];</div><div class='line' id='LC1082'>					if ( val )</div><div class='line' id='LC1083'>						ret += ' ' + a + '=' + this.parse( val, 'attribute' );</div><div class='line' id='LC1084'>				}</div><div class='line' id='LC1085'>				return ret + close + open + '/' + tag + close;</div><div class='line' id='LC1086'>			},</div><div class='line' id='LC1087'>			functionArgs:function( fn ) {//function calls it internally, it's the arguments part of the function</div><div class='line' id='LC1088'>				var l = fn.length;</div><div class='line' id='LC1089'>				if ( !l ) return '';				</div><div class='line' id='LC1090'><br/></div><div class='line' id='LC1091'>				var args = Array(l);</div><div class='line' id='LC1092'>				while ( l-- )</div><div class='line' id='LC1093'>					args[l] = String.fromCharCode(97+l);//97 is 'a'</div><div class='line' id='LC1094'>				return ' ' + args.join(', ') + ' ';</div><div class='line' id='LC1095'>			},</div><div class='line' id='LC1096'>			key:quote, //object calls it internally, the key part of an item in a map</div><div class='line' id='LC1097'>			functionCode:'[code]', //function calls it internally, it's the content of the function</div><div class='line' id='LC1098'>			attribute:quote, //node calls it internally, it's an html attribute value</div><div class='line' id='LC1099'>			string:quote,</div><div class='line' id='LC1100'>			date:quote,</div><div class='line' id='LC1101'>			regexp:literal, //regex</div><div class='line' id='LC1102'>			number:literal,</div><div class='line' id='LC1103'>			'boolean':literal</div><div class='line' id='LC1104'>		},</div><div class='line' id='LC1105'>		DOMAttrs:{//attributes to dump from nodes, name=&gt;realName</div><div class='line' id='LC1106'>			id:'id',</div><div class='line' id='LC1107'>			name:'name',</div><div class='line' id='LC1108'>			'class':'className'</div><div class='line' id='LC1109'>		},</div><div class='line' id='LC1110'>		HTML:true,//if true, entities are escaped ( &lt;, &gt;, \t, space and \n )</div><div class='line' id='LC1111'>		indentChar:'   ',//indentation unit</div><div class='line' id='LC1112'>		multiline:true //if true, items in a collection, are separated by a \n, else just a space.</div><div class='line' id='LC1113'>	};</div><div class='line' id='LC1114'><br/></div><div class='line' id='LC1115'>	return jsDump;</div><div class='line' id='LC1116'>})();</div><div class='line' id='LC1117'><br/></div><div class='line' id='LC1118'>})(this);</div><div class='line' id='LC1119'><br/></div><div class='line' id='LC1120'>$(document).ready(function(){</div><div class='line' id='LC1121'>	var b = document.body;</div><div class='line' id='LC1122'>	if (document.compatMode == 'CSS1Compat') {</div><div class='line' id='LC1123'>		b = document.documentElement;</div><div class='line' id='LC1124'>	}</div><div class='line' id='LC1125'>	if (document.getElementById('qunit-header') == null) {</div><div class='line' id='LC1126'>		var h1 = document.createElement('h1');</div><div class='line' id='LC1127'>		h1.id = 'qunit-header';</div><div class='line' id='LC1128'>		b.appendChild(h1);</div><div class='line' id='LC1129'>	}</div><div class='line' id='LC1130'>	var h2 = document.createElement('h2');</div><div class='line' id='LC1131'>	h2.id = 'qunit-banner';</div><div class='line' id='LC1132'>	b.appendChild(h2);</div><div class='line' id='LC1133'>	var h21 = document.createElement('h2');</div><div class='line' id='LC1134'>	h21.id = 'qunit-userAgent';</div><div class='line' id='LC1135'>	b.appendChild(h2);</div><div class='line' id='LC1136'>	var ol = document.createElement('ol');</div><div class='line' id='LC1137'>	ol.id = 'qunit-tests';</div><div class='line' id='LC1138'>	b.appendChild(ol);</div><div class='line' id='LC1139'>});</div></pre></div>
            
          </td>
        </tr>
      </table>
    
  </div>


      </div>
    </div>

  


    </div>
  
      

      <div class="push"></div>
    </div>

    <div id="footer">
      <div class="site">
        <div class="info">
          <div class="links">
            <a href="http://github.com/blog"><b>Blog</b></a> |
            <a href="http://support.github.com">Support</a> |
            <a href="http://github.com/training">Training</a> |
            <a href="http://jobs.github.com">Job Board</a> |
            <a href="http://github.com/contact">Contact</a> |
            <a href="http://develop.github.com">API</a> |
            <a href="http://status.github.com">Status</a> |
            <a href="http://twitter.com/github">Twitter</a> |
            <a href="http://help.github.com">Help</a> |
            <a href="http://github.com/security">Security</a>
          </div>
          <div class="company">
            &copy;
            2010
            <span id="_rrt" title="0.08274s from fe4.rs.github.com">GitHub</span> Inc.
            All rights reserved. |
            <a href="/site/terms">Terms of Service</a> |
            <a href="/site/privacy">Privacy Policy</a>
          </div>
        </div>
        <div class="sponsor">
          <div>
            Powered by the <a href="http://www.rackspace.com">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
          <a href="http://www.rackspace.com">
            <img alt="Dedicated Server" src="http://assets2.github.com/images/modules/footer/rackspace_logo.png?73072a7777cbe88ed1e0d014485753f864b02c5e" />
          </a>
        </div>
      </div>
    </div>

    
      
      
        <!-- current locale:  -->
        <div class="locales">
          <div class="site">
            <ul class="choices">
              
                
                  <li><span class="current">English</span></li>
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                
              
                
                  
                    <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                
              
            </ul>
          </div>
        </div>
      
    

    <script>window._auth_token = "6a45f7bdc99c2da38790cbc8325d3131e29cabe6"</script>
    

    <script type="text/javascript">
      _kmq.push(['trackClick', 'entice_banner_link', 'Entice banner clicked']);
      
    </script>
    
  </body>
</html>


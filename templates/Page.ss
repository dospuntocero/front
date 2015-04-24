<!DOCTYPE html>
<html lang="en">
<head>
	<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
	<% base_tag %>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<% if MetaDescription %>
		<meta name="description" content="$MetaDescription">
	<% end_if %>
	<link rel="shortcut icon" href="favicon.ico" />
</head>
<body class="$ClassName">
	<% include Header %>
	<main class="typography">
		$Layout
	</main>
	<% include Footer %>
</body>
</html>
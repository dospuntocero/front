<nav class="nav">
	<a href="#0" class="responsive-nav-trigger">Menu<span></span></a>

	<ul>
		<% loop $Menu(1) %>
			<li class="$LinkingMode $URLSegment-menu <% if $Children %>dropdown<% end_if %>">
				<a href="$Link" title="$Title.XML">$MenuTitle.XML</a>

				<% if $Children %>
					<div class="submenu">
						<ul>
						<% loop $Children %>
							<li class="$LinkingMode $URLSegment-menu">
								<a href="$Link" title="$Title.XML">$MenuTitle.XML</a>
							</li>
						<% end_loop %>
						</ul>
					</div>
				<% end_if %>

			</li>
		<% end_loop %>
	</ul>
</nav>
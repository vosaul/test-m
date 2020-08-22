source "https://rubygems.org"

# gem "jekyll", "~> 4.0.1"
gem "github-pages", group: :jekyll_plugins
group :jekyll_plugins do
#  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
#  gem "jekyll-paginate-v2", ">= 3.0"
end

#gem 'liquid', github: 'Shopify/liquid', branch: 'master'
#gem 'liquid-c', github: 'Shopify/liquid-c', branch: 'master'

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?


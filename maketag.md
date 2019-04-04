---
layout: page
---

**tag** 폴더에 복붙해서 실행하자.

{% highlight bash %} {% for tag in site.tags %} echo $'---\nlayout: tag_index\ntag: {{ tag[0] }} \n---' > '{{ tag[0] }}.md' &{% endfor %} {% endhighlight %}

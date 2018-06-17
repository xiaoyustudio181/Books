<?php
$html = '';

$res = fopen('laozi.txt', 'r');

$is_content = false;
$is_translation = false;

$count_chapter = 0;
$chapter_name = '';
$content = '';
$translation = '';

while (!feof($res)) {
    $line = fgets($res);
    $line = iconv("gbk", "utf-8", $line);

    if (mb_strpos($line, '【') === 0) {#原文开始（最后一章无法被检查到，需手动添加）
        if ($count_chapter !== 0) {
            $html .= "<div class=\"row\">
        <div class=\"col-sm-12\">
            <p class=\"chapter\">
                $chapter_name
                <span class=\"open_translation\">展开译文</span>
            </p>
            <p class=\"content\">$content</p>
            <p class=\"translation\">[译文]<br/>$translation</p>
        </div>
    </div>";
        }
        $count_chapter++;

        $content = '';
        $chapter_name = mb_substr($line, 1, 8);
        $chapter_name = mb_substr($chapter_name, 0, mb_strpos($chapter_name, '】'));
        $is_content = true;
        $is_translation = false;
    } elseif (mb_strpos($line, '[') === 1) {#译文开始
        $translation = '';
        $is_content = false;
        $is_translation = true;
    } else {#内容
        if ($is_content) {
            $content .= nl2br($line);
        } else {
            $translation .= nl2br($line);
        }
    }
}
fclose($res);
echo htmlentities($html);
import React from "react";
import Card from "./Card";

const descriptions = [
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  [
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  ],
  [
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  [
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  ],
  [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  ],
];

interface Newsletter {
  id: number;
  title: string;
  imageUrl: string;
}

interface NewsletterRowProps {
  newsletters: Newsletter[];
}

const NewsletterRow: React.FC<NewsletterRowProps> = ({ newsletters }) => {
  return (
    <div className="p-5">
      {newsletters.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          descriptions={
            descriptions[Math.floor(Math.random() * descriptions.length)]
          }
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsletterRow;

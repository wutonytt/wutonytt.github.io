export const projects = [
  {
    name: "Camera-Based Table Tennis Stroke Analysis",
    descriptions: [
      "Led a team of three to solve a staff shortage problem for the university’s table tennis team by automating video analysis and calculations",
      "Built an SVM model to classify table tennis players’ strokes (forehand, backhand, etc.) with skeleton detection and achieved 92% accuracy on test videos",
      "Designed a model to trace balls and tables with a 90% average IoU score on test images by Semantic Segmentation utilizing Google AI’s EfficientNet",
    ],
    img_path: "src/assets/camera-based-table-tennis-posture-analysis.png",
    repo_link:
      "https://github.com/wutonytt/Camera-Based-Table-Tennis-Posture-Analysis",
    badges: [
      "Python",
      "Jupyter",
      "Semantic Segmentation",
      "Deep Learning",
      "Computer Vision",
      "OpenPose",
      "EfficientNet",
    ],
  },
  {
    name: "Fake News Detection using a BERT-Based Deep Learning Approach",
    descriptions: [
      "Utilized LSTM, Bidirectional LSTM, CNN-BiLSTM, and BERT-based model to perform fake news detection",
      "Achieved 97% to 99% accuracy on University of Victoria ISOT Fake News Dataset",
    ],
    img_path: "src/assets/fake-news-detection.png",
    repo_link: "https://github.com/wutonytt/fake-news-detection",
    badges: [
      "Python",
      "Jupyter",
      "Natural Language Processing",
      "LSTM",
      "BiLSTM",
      "CNN-BiLSTM",
      "BERT",
    ],
  },
  {
    name: "Stock Price Prediction",
    descriptions: [
      "Implemented a Long Short-Term Memory model to predict stock prices for the next ten days based on data for the past 1,000 days; data was fetched by Yahoo! Finance API",
      "Verified and visualized the trends of actual and predicted stock prices for the past ten years",
    ],
    img_path: "src/assets/stock-price-detection.png",
    repo_link: "https://github.com/wutonytt/Stock-Price-Prediction",
    badges: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "Yahoo! Finance API",
    ],
  },
  {
    name: "Emotion Classification on Empathetic Dialogues using BERT-Based Models",
    descriptions: [
      "Used data grouping, role feature, and FastText to manipulate the input data and applied them on RoBERTa",
      "Achieved 63% accuracy on Emotion Classification on Empathetic Dialogues",
    ],
    img_path: "src/assets/empathetic_dialogues.png",
    repo_link:
      "https://github.com/wutonytt/Emotion-Classification-on-Empathetic-Dialogues",
    badges: [
      "Python",
      "Jupyter",
      "Natural Language Processing",
      "BERT",
      "RoBERTa",
      "FastText",
    ],
  },
];

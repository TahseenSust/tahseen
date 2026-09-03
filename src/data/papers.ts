export interface Paper {
  title: string
  authors: string
  venue: string
  year: string
  url: string
  note: string
  tags: string[]
}

export const PAPERS: Paper[] = [
  {
    title: "Sequence to Sequence Learning with Neural Networks",
    authors: "Ilya Sutskever, Oriol Vinyals, Quoc V. Le",
    venue: "NeurIPS",
    year: "2014",
    url: "https://arxiv.org/pdf/1409.3215",
    note:
      "Introduced the encoder–decoder LSTM formulation that maps one variable-length sequence to another, laying the groundwork for modern neural machine translation and the sequence models that followed.",
    tags: ["Deep Learning", "NLP", "Seq2Seq"],
  },
  {
    title:
      "Neural Machine Translation by Jointly Learning to Align and Translate",
    authors: "Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio",
    venue: "ICLR",
    year: "2015",
    url: "https://arxiv.org/pdf/1409.0473",
    note:
      "The direct answer to the fixed-length bottleneck in encoder–decoder models: instead of squeezing a whole source sentence into one vector, the decoder learns to soft-search the input and weight the parts that matter for each output token. This is the origin of attention, and it is why I keep it next to the seq2seq paper.",
    tags: ["Attention", "NLP", "Deep Learning"],
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    venue: "CVPR",
    year: "2016",
    url: "https://arxiv.org/pdf/1512.03385",
    note:
      "Showed that the barrier to deeper networks was optimization rather than capacity, and that letting layers fit a residual instead of a full mapping makes hundreds of layers trainable. I keep it here because the identity shortcut turned out to be a general architectural idea, not a vision-only trick.",
    tags: ["Deep Learning", "Computer Vision", "Architectures"],
  },
  {
    title: "Attention Is All You Need",
    authors:
      "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin",
    venue: "NeurIPS",
    year: "2017",
    url: "https://arxiv.org/pdf/1706.03762",
    note:
      "Took the attention mechanism from a supplement to recurrence and made it the entire model. Dropping the recurrent path removed the sequential dependency in training and made self-attention the default way to model long-range structure, which is why it sits at the end of this line of papers rather than beside them.",
    tags: ["Attention", "Transformers", "NLP"],
  },
  {
    title:
      "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
    authors: "Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova",
    venue: "NAACL",
    year: "2019",
    url: "https://arxiv.org/pdf/1810.04805",
    note:
      "Took the Transformer encoder and asked what it could learn without a translation objective at all. Masked language modeling lets every token condition on both directions at once, and the result was that a single pre-trained model could be fine-tuned across tasks instead of designing an architecture per task. I keep it after the Transformer paper because it marks the shift from architectures to pre-training as the thing that carries the performance.",
    tags: ["Transformers", "NLP", "Pre-training"],
  },
  {
    title: "Language Models are Unsupervised Multitask Learners",
    authors:
      "Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever",
    venue: "OpenAI Technical Report",
    year: "2019",
    url: "https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf",
    note:
      "The other answer to the same question BERT asked, and the reason I keep the two together. Rather than pre-train and then fine-tune per task, GPT-2 treats the tasks themselves as text and shows a plain language-modeling objective at scale can perform them zero-shot. It is where capability starts coming from scale and framing rather than task-specific supervision.",
    tags: ["Transformers", "NLP", "Language Models"],
  },
  {
    title:
      "You Get What You Chat: Using Conversations to Personalize Search-based Recommendations",
    authors: "Ghazaleh H. Torbati, Andrew Yates, Gerhard Weikum",
    venue: "ECIR",
    year: "2021",
    url: "https://arxiv.org/pdf/2109.04716",
    note:
      "Builds a user model out of ordinary conversation instead of ratings or questionnaires, then uses it to re-rank entity answers across books, travel, and food. I keep it because it treats unstructured chat as a legitimate source of preference signal, and because the comparison against questionnaire-derived profiles is an honest measurement of how much that signal is actually worth.",
    tags: ["Information Retrieval", "Recommender Systems", "Personalization"],
  },
  {
    title: "Large Language Models as Zero-Shot Conversational Recommenders",
    authors:
      "Zhankui He, Zhouhang Xie, Rahul Jha, Harald Steck, Dawen Liang, Yesu Feng, Bodhisattwa Prasad Majumder, Nathan Kallus, Julian McAuley",
    venue: "CIKM",
    year: "2023",
    url: "https://arxiv.org/pdf/2308.10053",
    note:
      "The point where the zero-shot framing from GPT-2 meets the recommendation setting: an untuned language model, given conversations collected in the wild, beats systems trained for the task. What keeps it on the shelf is the probing analysis rather than the headline — the paper works to separate genuine capability from what the model already saw during pre-training, which is the question I want asked whenever a general model outperforms a specialized one.",
    tags: ["Language Models", "Recommender Systems", "Evaluation"],
  },
  {
    title: "Harnessing the Universal Geometry of Embeddings",
    authors: "Rishi Jha, Collin Zhang, Vitaly Shmatikov, John X. Morris",
    venue: "NeurIPS",
    year: "2025",
    url: "https://arxiv.org/pdf/2505.12540",
    note:
      "Makes the Platonic Representation Hypothesis constructive for text embeddings: vec2vec learns to translate between incompatible embedding spaces without paired examples or access to the original encoder. I keep it here for both the geometric result and the security lesson — a vector database alone can reveal sensitive properties of the documents behind it.",
    tags: ["Embeddings", "Representation Learning", "Security"],
  },
]
